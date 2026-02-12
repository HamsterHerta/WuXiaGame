import type { I18nKey } from './i18n'

// 主角基础数值键
export type StatKey = 'renown' | 'strength' | 'wisdom' | 'wealth' | 'morality' | 'luck'

// 游戏内日期结构，统一使用“年/月/日”
export type DateParts = { year: number; month: number; day: number }

// 可用地点 ID，事件可绑定地点
export type LocationId = 'road' | 'sect' | 'market' | 'tavern' | 'village' | 'mountain'

// 事件类别：
// fixed: 固定时间必定触发
// conditional: 条件满足后必定触发
// random: 条件满足后按概率触发
export type EventCategory = 'fixed' | 'conditional' | 'random'

export type GameStats = Record<StatKey, number>

// 事件触发条件定义，可按需组合多个条件
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

// 关系维度：好感 / 仇恨 / 情义
export type RelationKey = 'favor' | 'rivalry' | 'loyalty'

export type RelationStats = Record<RelationKey, number>

// 关系变化；target 表示具体人物/势力 ID
export type RelationEffect = { stat: RelationKey; delta: number; target?: string }

// 选项定义：可同时包含数值变化、关系变化、地点变化、跳转等
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

// 事件定义：
// - fixedDate 用于固定事件
// - conditions 用于条件/随机事件
// - randomChance 控制随机触发概率
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

// 游戏运行态
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

// 随机奖励：随机值 + 可选属性加成
export type RandomReward = {
  stat: StatKey
  min: number
  max: number
  scaleStat?: StatKey
  scaleFactor?: number
}

// 随机事件概率模型：基础概率 + 按属性加权
export type RandomChance = {
  base: number
  scale?: Partial<Record<StatKey, number>>
}

export type Location = {
  id: LocationId
  nameKey: I18nKey
}
