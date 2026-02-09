import { computed, reactive, readonly } from 'vue'
import type { Lang } from '../data/i18n'
import { t } from '../data/i18n'
import { endings } from '../data/endings'
import { events, START_EVENT_ID } from '../data/events'
import type {
  Condition,
  Event,
  GameState,
  GameStats,
  Option,
  RandomReward,
  RelationEffect,
  RelationKey,
  StatKey
} from '../data/types'

const SAVE_KEY = 'wuxia_save_v1'
const MAX_DAY = 30
const CROSSROAD_DAY = 22

const baseStats: GameStats = {
  renown: 1,
  strength: 1,
  wisdom: 1,
  wealth: 1,
  morality: 1,
  luck: 1
}

const baseRelations: Record<RelationKey, number> = {
  favor: 1,
  rivalry: 0,
  loyalty: 1
}

const createState = (): GameState => ({
  day: 1,
  stats: { ...baseStats },
  relations: { ...baseRelations },
  flags: {},
  currentEventId: START_EVENT_ID,
  history: [],
  ended: false,
  endingId: undefined
})

const store = reactive({
  lang: 'zh' as Lang,
  state: createState(),
  lastSavedAt: '',
  saveVersion: 0
})

const clampStat = (value: number) => Math.max(0, Math.min(10, value))
const DEADLINE = 0

const meetsCondition = (condition: Condition, state: GameState) => {
  switch (condition.type) {
    case 'statMin':
      return state.stats[condition.stat] >= condition.value
    case 'statMax':
      return state.stats[condition.stat] <= condition.value
    case 'relMin':
      return state.relations[condition.stat] >= condition.value
    case 'relMax':
      return state.relations[condition.stat] <= condition.value
    case 'flag':
      return Boolean(state.flags[condition.flag])
    case 'notFlag':
      return !state.flags[condition.flag]
    default:
      return false
  }
}

const eventAllowed = (event: Event, state: GameState) => {
  if (!event.conditions || event.conditions.length === 0) return true
  return event.conditions.every((condition) => meetsCondition(condition, state))
}

const pickNextEvent = (state: GameState) => {
  if (state.day >= CROSSROAD_DAY && !state.history.includes('crossroad')) return 'crossroad'

  const randomPool = events.filter((event) => event.random && eventAllowed(event, state))
  const normalPool = events.filter(
    (event) =>
      !event.random &&
      event.id !== state.currentEventId &&
      !state.history.includes(event.id) &&
      eventAllowed(event, state) &&
      event.id !== 'crossroad'
  )

  const luckBonus = Math.min(0.2, state.stats.luck * 0.02)
  const randomChance = 0.35 + luckBonus
  if (randomPool.length > 0 && Math.random() < randomChance) {
    const index = Math.floor(Math.random() * randomPool.length)
    return randomPool[index].id
  }

  if (normalPool.length === 0) {
    if (!state.history.includes('crossroad')) return 'crossroad'
    return START_EVENT_ID
  }

  const index = Math.floor(Math.random() * normalPool.length)
  return normalPool[index].id
}

const applyEffects = (effects: Option['effects'] | undefined, stats: GameStats) => {
  if (!effects) return
  effects.forEach((effect) => {
    stats[effect.stat] = clampStat(stats[effect.stat] + effect.delta)
  })
}

const applyRelationEffects = (
  effects: RelationEffect[] | undefined,
  relations: GameState['relations']
) => {
  if (!effects) return
  effects.forEach((effect) => {
    relations[effect.stat] = clampStat(relations[effect.stat] + effect.delta)
  })
}

const randInt = (min: number, max: number) => {
  const low = Math.ceil(min)
  const high = Math.floor(max)
  return Math.floor(Math.random() * (high - low + 1)) + low
}

const applyRandomRewards = (rewards: RandomReward[] | undefined, stats: GameStats) => {
  if (!rewards) return
  rewards.forEach((reward) => {
    const base = randInt(reward.min, reward.max)
    const scale =
      reward.scaleStat && reward.scaleFactor
        ? Math.floor(stats[reward.scaleStat] * reward.scaleFactor)
        : 0
    stats[reward.stat] = clampStat(stats[reward.stat] + base + scale)
  })
}

const checkDeath = (state: GameState) => {
  const dead = Object.values(state.stats).some((value) => value <= DEADLINE)
  if (!dead) return false
  state.endingId = 'death'
  state.ended = true
  return true
}

const resolveEnding = (state: GameState) => {
  const matched = endings.find((ending) => {
    if (!ending.conditions || ending.conditions.length === 0) return true
    return ending.conditions.every((condition) => meetsCondition(condition, state))
  })

  state.endingId = matched?.id ?? 'wanderer'
  state.ended = true
}

const saveGame = () => {
  const payload = {
    lang: store.lang,
    state: store.state
  }
  localStorage.setItem(SAVE_KEY, JSON.stringify(payload))
  store.lastSavedAt = new Date().toLocaleTimeString()
  store.saveVersion += 1
}

const loadGame = () => {
  const raw = localStorage.getItem(SAVE_KEY)
  if (!raw) return false
  try {
    const data = JSON.parse(raw) as { lang?: Lang; state?: GameState }
    if (data.lang) store.lang = data.lang
    if (data.state) {
      Object.assign(store.state, data.state)
      if (!store.state.relations) {
        store.state.relations = { ...baseRelations }
      } else {
        store.state.relations = { ...baseRelations, ...store.state.relations }
      }
    }
    store.saveVersion += 1
    return true
  } catch {
    return false
  }
}

const clearSave = () => {
  localStorage.removeItem(SAVE_KEY)
  store.lastSavedAt = ''
  store.saveVersion += 1
}

const newGame = () => {
  Object.assign(store.state, createState())
  saveGame()
}

const chooseOption = (option: Option) => {
  if (store.state.ended) return

  applyEffects(option.effects, store.state.stats)
  applyRelationEffects(option.relationEffects, store.state.relations)
  applyRandomRewards(option.randomRewards, store.state.stats)
  option.setFlags?.forEach((flag) => {
    store.state.flags[flag] = true
  })

  if (!store.state.history.includes(store.state.currentEventId)) {
    store.state.history.push(store.state.currentEventId)
  }

  if (option.endId) {
    store.state.endingId = option.endId
    store.state.ended = true
    saveGame()
    return
  }

  if (checkDeath(store.state)) {
    saveGame()
    return
  }

  const activeEvent = currentEvent.value
  const eventWait = activeEvent?.waitDays ?? 1
  let optionWait = option.waitDays ?? eventWait
  if (option.waitDays == null && activeEvent && !activeEvent.random) {
    const isFirst = option.textKey.endsWith('opt1')
    optionWait = isFirst ? Math.max(2, eventWait) : Math.max(1, eventWait - 1)
  }
  store.state.day += Math.max(1, optionWait)

  if (store.state.day >= MAX_DAY) {
    resolveEnding(store.state)
    saveGame()
    return
  }

  const candidateId = option.nextEventId
  const candidateEvent = candidateId ? events.find((event) => event.id === candidateId) : undefined
  const nextId =
    candidateEvent && candidateId !== store.state.currentEventId
      ? candidateId
      : pickNextEvent(store.state)
  store.state.currentEventId = nextId
  saveGame()
}

const setLang = (lang: Lang) => {
  store.lang = lang
  saveGame()
}

const currentEvent = computed(() =>
  events.find((event) => event.id === store.state.currentEventId)
)

const canContinue = computed(() => {
  void store.saveVersion
  return Boolean(localStorage.getItem(SAVE_KEY))
})

const getEnding = computed(() => endings.find((ending) => ending.id === store.state.endingId))

const hudStats = computed(() => {
  return [
    { key: 'renown', label: t('app.hud.renown', store.lang), value: store.state.stats.renown },
    { key: 'strength', label: t('app.hud.strength', store.lang), value: store.state.stats.strength },
    { key: 'wisdom', label: t('app.hud.wisdom', store.lang), value: store.state.stats.wisdom },
    { key: 'wealth', label: t('app.hud.wealth', store.lang), value: store.state.stats.wealth },
    { key: 'morality', label: t('app.hud.morality', store.lang), value: store.state.stats.morality },
    { key: 'luck', label: t('app.hud.luck', store.lang), value: store.state.stats.luck }
  ]
})

const statKeys: StatKey[] = ['renown', 'strength', 'wisdom', 'wealth', 'morality', 'luck']

const statLabels = computed(() => {
  return statKeys.reduce<Record<StatKey, string>>((acc, key) => {
    const map: Record<StatKey, string> = {
      renown: t('app.hud.renown', store.lang),
      strength: t('app.hud.strength', store.lang),
      wisdom: t('app.hud.wisdom', store.lang),
      wealth: t('app.hud.wealth', store.lang),
      morality: t('app.hud.morality', store.lang),
      luck: t('app.hud.luck', store.lang)
    }
    acc[key] = map[key]
    return acc
  }, {} as Record<StatKey, string>)
})

const relationStats = computed(() => {
  return [
    { key: 'favor', label: t('app.relation.favor', store.lang), value: store.state.relations.favor },
    { key: 'rivalry', label: t('app.relation.rivalry', store.lang), value: store.state.relations.rivalry },
    { key: 'loyalty', label: t('app.relation.loyalty', store.lang), value: store.state.relations.loyalty }
  ]
})

export const useGameStore = () => {
  return {
    state: readonly(store.state),
    lang: computed(() => store.lang),
    lastSavedAt: computed(() => store.lastSavedAt),
    currentEvent,
    canContinue,
    getEnding,
    hudStats,
    statLabels,
    relationStats,
    newGame,
    loadGame,
    clearSave,
    chooseOption,
    setLang
  }
}
