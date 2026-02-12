import { computed, reactive, readonly } from 'vue'
import type { Lang } from '../data/i18n'
import { t } from '../data/i18n'
import { endings } from '../data/endings'
import { events, START_EVENT_ID } from '../data/events'
import { locations } from '../data/locations'
import type {
  Condition,
  DateParts,
  Event,
  GameState,
  GameStats,
  LocationId,
  Option,
  RandomReward,
  RelationEffect,
  RelationKey,
  StatKey
} from '../data/types'

const SAVE_KEY = 'wuxia_save_v1'
const MAX_DAYS = 180
const DAYS_PER_MONTH = 30
const MONTHS_PER_YEAR = 12

const baseStats: GameStats = {
  renown: 1,
  strength: 1,
  wisdom: 1,
  wealth: 1,
  morality: 1,
  luck: 1
}

const baseRelation: Record<RelationKey, number> = {
  favor: 0,
  rivalry: 0,
  loyalty: 0
}

const createState = (): GameState => ({
  date: { year: 1, month: 1, day: 1 },
  stats: { ...baseStats },
  relations: {},
  flags: {},
  currentEventId: START_EVENT_ID,
  history: [],
  ended: false,
  endingId: undefined,
  locationId: 'road'
})

const store = reactive({
  lang: 'zh' as Lang,
  state: createState(),
  lastSavedAt: '',
  saveVersion: 0
})

const clampStat = (value: number) => Math.max(0, Math.min(10, value))
const DEADLINE = 0

const pad2 = (value: number) => String(value).padStart(2, '0')

const dateToIndex = (date: DateParts) => {
  return (
    (date.year - 1) * MONTHS_PER_YEAR * DAYS_PER_MONTH +
    (date.month - 1) * DAYS_PER_MONTH +
    (date.day - 1)
  )
}

const indexToDate = (index: number): DateParts => {
  const totalDays = Math.max(0, index)
  const year = Math.floor(totalDays / (MONTHS_PER_YEAR * DAYS_PER_MONTH)) + 1
  const yearRemainder = totalDays % (MONTHS_PER_YEAR * DAYS_PER_MONTH)
  const month = Math.floor(yearRemainder / DAYS_PER_MONTH) + 1
  const day = (yearRemainder % DAYS_PER_MONTH) + 1
  return { year, month, day }
}

const addDays = (date: DateParts, days: number) => indexToDate(dateToIndex(date) + days)

const formatDate = (date: DateParts, lang: Lang) => {
  if (lang === 'zh') return `${date.year}年${date.month}月${date.day}日`
  return `${date.year}-${pad2(date.month)}-${pad2(date.day)}`
}

const defaultRelationTarget = (eventId?: string) => {
  if (!eventId) return 'jianghu'
  if (eventId.includes('assassin')) return 'enemy'
  if (eventId.includes('oath')) return 'ally'
  if (eventId.includes('alliance')) return 'heroes'
  if (eventId.includes('sect')) return 'sects'
  if (eventId.includes('swordsman')) return 'swordsman'
  return 'jianghu'
}

const getRelation = (state: GameState, target: string) => {
  if (!state.relations[target]) {
    state.relations[target] = { ...baseRelation }
  }
  return state.relations[target]
}

const meetsCondition = (condition: Condition, state: GameState) => {
  switch (condition.type) {
    case 'statMin':
      return state.stats[condition.stat] >= condition.value
    case 'statMax':
      return state.stats[condition.stat] <= condition.value
    case 'relMin':
      return (
        getRelation(state, condition.target ?? defaultRelationTarget(state.currentEventId))[
          condition.stat
        ] >= condition.value
      )
    case 'relMax':
      return (
        getRelation(state, condition.target ?? defaultRelationTarget(state.currentEventId))[
          condition.stat
        ] <= condition.value
      )
    case 'flag':
      return Boolean(state.flags[condition.flag])
    case 'notFlag':
      return !state.flags[condition.flag]
    case 'dateMin':
      return dateToIndex(state.date) >= dateToIndex(condition.date)
    case 'dateMax':
      return dateToIndex(state.date) <= dateToIndex(condition.date)
    case 'locationIs':
      return state.locationId === condition.locationId
    case 'locationNot':
      return state.locationId !== condition.locationId
    case 'eventDone':
      return state.history.includes(condition.eventId)
    default:
      return false
  }
}

const eventAllowed = (event: Event, state: GameState) => {
  if (!event.conditions || event.conditions.length === 0) return true
  return event.conditions.every((condition) => meetsCondition(condition, state))
}

const eventLocationAllowed = (event: Event, state: GameState) => {
  if (!event.locationId) return true
  if (event.category === 'fixed' && event.fixedDate) return true
  return event.locationId === state.locationId
}

const calcRandomChance = (event: Event, state: GameState) => {
  const base = event.randomChance?.base ?? 0.18
  const scale = event.randomChance?.scale ?? {}
  const bonus = Object.entries(scale).reduce((sum, [stat, factor]) => {
    const key = stat as StatKey
    return sum + state.stats[key] * (factor ?? 0)
  }, 0)
  return Math.max(0.05, Math.min(0.9, base + bonus))
}

const pickNextEvent = (state: GameState) => {
  const currentIndex = dateToIndex(state.date)
  const pendingFixed = events.filter(
    (event) =>
      event.category === 'fixed' &&
      event.fixedDate &&
      !state.history.includes(event.id) &&
      eventAllowed(event, state)
  )
  const dueFixed = pendingFixed
    .filter((event) => dateToIndex(event.fixedDate!) <= currentIndex)
    .sort((a, b) => dateToIndex(a.fixedDate!) - dateToIndex(b.fixedDate!))
  if (dueFixed.length > 0) return dueFixed[0].id

  const conditionalPool = events.filter(
    (event) =>
      event.category === 'conditional' &&
      event.id !== state.currentEventId &&
      !state.history.includes(event.id) &&
      eventAllowed(event, state)
  )
  if (conditionalPool.length > 0) return conditionalPool[0].id

  const randomPool = events.filter(
    (event) => event.random && eventAllowed(event, state) && eventLocationAllowed(event, state)
  )
  if (randomPool.length > 0) {
    const weighted = randomPool.map((event) => ({
      event,
      weight: calcRandomChance(event, state)
    }))
    const totalWeight = weighted.reduce((sum, item) => sum + item.weight, 0)
    const averageChance = totalWeight / weighted.length
    if (Math.random() < averageChance) {
      const roll = Math.random() * totalWeight
      let cursor = 0
      for (const item of weighted) {
        cursor += item.weight
        if (roll <= cursor) return item.event.id
      }
      return weighted[weighted.length - 1].event.id
    }
  }

  return START_EVENT_ID
}

const applyEffects = (effects: Option['effects'] | undefined, stats: GameStats) => {
  if (!effects) return
  effects.forEach((effect) => {
    stats[effect.stat] = clampStat(stats[effect.stat] + effect.delta)
  })
}

const applyRelationEffects = (
  effects: RelationEffect[] | undefined,
  relations: GameState['relations'],
  fallbackTarget: string
) => {
  if (!effects) return
  effects.forEach((effect) => {
    const target = effect.target ?? fallbackTarget
    const current = relations[target] ?? { ...baseRelation }
    current[effect.stat] = clampStat(current[effect.stat] + effect.delta)
    relations[target] = current
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
      const incoming = data.state as GameState & { day?: number }
      if (!incoming.date && typeof incoming.day === 'number') {
        incoming.date = addDays({ year: 1, month: 1, day: 1 }, Math.max(0, incoming.day - 1))
      }
      Object.assign(store.state, incoming)
      if (!store.state.relations) {
        store.state.relations = {}
      }
      if (!store.state.locationId) {
        store.state.locationId = 'road'
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
  const relationTarget =
    option.relationTarget ?? defaultRelationTarget(store.state.currentEventId)
  applyRelationEffects(option.relationEffects, store.state.relations, relationTarget)
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
  const eventDuration = activeEvent?.durationDays ?? eventWait
  let optionWait =
    option.durationDays ?? option.waitDays ?? eventDuration
  if (option.durationDays == null && option.waitDays == null && activeEvent && !activeEvent.random) {
    const isFirst = option.textKey.endsWith('opt1')
    optionWait = isFirst ? Math.max(2, optionWait) : Math.max(1, optionWait - 1)
  }
  store.state.date = addDays(store.state.date, Math.max(1, optionWait))

  if (dateToIndex(store.state.date) + 1 >= MAX_DAYS) {
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
  const nextEvent = events.find((event) => event.id === nextId)
  const nextLocation: LocationId =
    option.moveTo ?? nextEvent?.locationId ?? store.state.locationId
  store.state.locationId = nextLocation
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

const locationLabel = computed(() => {
  const item = locations.find((location) => location.id === store.state.locationId)
  return item ? t(item.nameKey, store.lang) : '--'
})

const dateLabel = computed(() => formatDate(store.state.date, store.lang))

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


export const useGameStore = () => {
  return {
    state: readonly(store.state),
    lang: computed(() => store.lang),
    lastSavedAt: computed(() => store.lastSavedAt),
    currentEvent,
    canContinue,
    getEnding,
    hudStats,
    locationLabel,
    dateLabel,
    statLabels,
    newGame,
    loadGame,
    clearSave,
    chooseOption,
    setLang
  }
}
