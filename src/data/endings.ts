import type { Ending } from './types'

// 结局表：按顺序匹配，越靠前优先级越高
export const endings: Ending[] = [
  {
    id: 'death',
    titleKey: 'end.death.title',
    descKey: 'end.death.desc'
  },
  {
    id: 'alliance',
    titleKey: 'end.alliance.title',
    descKey: 'end.alliance.desc',
    conditions: [{ type: 'flag', flag: 'ending_alliance' }]
  },
  {
    id: 'vendetta',
    titleKey: 'end.vendetta.title',
    descKey: 'end.vendetta.desc',
    conditions: [{ type: 'flag', flag: 'ending_vendetta' }]
  },
  {
    id: 'oath',
    titleKey: 'end.oath.title',
    descKey: 'end.oath.desc',
    conditions: [{ type: 'flag', flag: 'ending_oath' }]
  },
  {
    id: 'sect',
    titleKey: 'end.sect.title',
    descKey: 'end.sect.desc',
    conditions: [{ type: 'flag', flag: 'ending_sect' }]
  },
  {
    id: 'hero',
    titleKey: 'end.hero.title',
    descKey: 'end.hero.desc',
    conditions: [{ type: 'statMin', stat: 'morality', value: 7 }]
  },
  {
    id: 'lord',
    titleKey: 'end.lord.title',
    descKey: 'end.lord.desc',
    conditions: [
      { type: 'statMin', stat: 'renown', value: 7 },
      { type: 'statMin', stat: 'wealth', value: 4 }
    ]
  },
  {
    id: 'wanderer',
    titleKey: 'end.wanderer.title',
    descKey: 'end.wanderer.desc'
  }
]
