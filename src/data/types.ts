import type { I18nKey } from './i18n'

export type StatKey = 'renown' | 'strength' | 'wisdom' | 'wealth' | 'morality' | 'luck'

export type GameStats = Record<StatKey, number>

export type Condition =
  | { type: 'statMin'; stat: StatKey; value: number }
  | { type: 'statMax'; stat: StatKey; value: number }
  | { type: 'relMin'; stat: RelationKey; value: number; target?: string }
  | { type: 'relMax'; stat: RelationKey; value: number; target?: string }
  | { type: 'flag'; flag: string }
  | { type: 'notFlag'; flag: string }

export type Effect = { stat: StatKey; delta: number }

export type RelationKey = 'favor' | 'rivalry' | 'loyalty'

export type RelationStats = Record<RelationKey, number>

export type RelationEffect = { stat: RelationKey; delta: number; target?: string }

export type Option = {
  textKey: I18nKey
  effects?: Effect[]
  randomRewards?: RandomReward[]
  relationEffects?: RelationEffect[]
  relationTarget?: string
  waitDays?: number
  setFlags?: string[]
  nextEventId?: string
  endId?: string
}

export type Event = {
  id: string
  titleKey: I18nKey
  descKey: I18nKey
  options: Option[]
  conditions?: Condition[]
  nextEventId?: string
  random?: boolean
  repeatable?: boolean
  waitDays?: number
}

export type Ending = {
  id: string
  titleKey: I18nKey
  descKey: I18nKey
  conditions?: Condition[]
}

export type GameState = {
  day: number
  stats: GameStats
  relations: Record<string, RelationStats>
  flags: Record<string, boolean>
  currentEventId: string
  history: string[]
  ended: boolean
  endingId?: string
}

export type RandomReward = {
  stat: StatKey
  min: number
  max: number
  scaleStat?: StatKey
  scaleFactor?: number
}
