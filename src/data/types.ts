import type { I18nKey } from './i18n'

export type StatKey = 'renown' | 'strength' | 'wisdom' | 'wealth' | 'morality' | 'luck'

export type DateParts = { year: number; month: number; day: number }

export type LocationId = 'road' | 'sect' | 'market' | 'tavern' | 'village' | 'mountain'

export type EventCategory = 'fixed' | 'conditional' | 'random'

export type GameStats = Record<StatKey, number>

export type Condition =
  | { type: 'statMin'; stat: StatKey; value: number }
  | { type: 'statMax'; stat: StatKey; value: number }
  | { type: 'relMin'; stat: RelationKey; value: number; target?: string }
  | { type: 'relMax'; stat: RelationKey; value: number; target?: string }
  | { type: 'flag'; flag: string }
  | { type: 'notFlag'; flag: string }
  | { type: 'dateMin'; date: DateParts }
  | { type: 'dateMax'; date: DateParts }
  | { type: 'locationIs'; locationId: LocationId }
  | { type: 'locationNot'; locationId: LocationId }
  | { type: 'eventDone'; eventId: string }

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
  durationDays?: number
  setFlags?: string[]
  nextEventId?: string
  endId?: string
  moveTo?: LocationId
}

export type Event = {
  id: string
  titleKey: I18nKey
  descKey: I18nKey
  options: Option[]
  conditions?: Condition[]
  nextEventId?: string
  random?: boolean
  category?: EventCategory
  repeatable?: boolean
  waitDays?: number
  durationDays?: number
  fixedDate?: DateParts
  locationId?: LocationId
  randomChance?: RandomChance
}

export type Ending = {
  id: string
  titleKey: I18nKey
  descKey: I18nKey
  conditions?: Condition[]
}

export type GameState = {
  date: DateParts
  stats: GameStats
  relations: Record<string, RelationStats>
  flags: Record<string, boolean>
  currentEventId: string
  history: string[]
  ended: boolean
  endingId?: string
  locationId: LocationId
}

export type RandomReward = {
  stat: StatKey
  min: number
  max: number
  scaleStat?: StatKey
  scaleFactor?: number
}

export type RandomChance = {
  base: number
  scale?: Partial<Record<StatKey, number>>
}

export type Location = {
  id: LocationId
  nameKey: I18nKey
}
