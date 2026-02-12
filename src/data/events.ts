import type { Event } from './types'

export const START_EVENT_ID = 'start'

// 事件表（数据驱动）
// 新增事件时优先复制以下模板并按需调整：
// {
//   id: 'your_event_id',
//   titleKey: 'event.your.title',
//   descKey: 'event.your.desc',
//   category: 'conditional', // fixed | conditional | random
//   locationId: 'road',
//   fixedDate: { year: 1, month: 1, day: 10 }, // fixed 事件可用
//   conditions: [{ type: 'statMin', stat: 'wisdom', value: 3 }],
//   randomChance: { base: 0.2, scale: { luck: 0.01, wisdom: 0.005 } }, // random 事件可用
//   durationDays: 2,
//   options: [
//     {
//       textKey: 'event.your.opt1',
//       effects: [{ stat: 'wisdom', delta: 1 }],
//       relationTarget: 'li_qing',
//       relationEffects: [{ stat: 'favor', delta: 1, target: 'li_qing' }],
//       moveTo: 'tavern',
//       nextEventId: 'another_event'
//     }
//   ]
// }
export const events: Event[] = [
  {
    id: 'start',
    titleKey: 'event.start.title',
    descKey: 'event.start.desc',
    category: 'fixed',
    locationId: 'road',
    durationDays: 1,
    options: [
      {
        textKey: 'event.start.opt1',
        nextEventId: 'sect',
        moveTo: 'sect',
        effects: [{ stat: 'wisdom', delta: 1 }]
      },
      {
        textKey: 'event.start.opt2',
        nextEventId: 'market',
        moveTo: 'market',
        effects: [{ stat: 'morality', delta: 1 }]
      }
    ]
  },
  {
    id: 'sect',
    titleKey: 'event.sect.title',
    descKey: 'event.sect.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 2,
    options: [
      {
        textKey: 'event.sect.opt1',
        effects: [
          { stat: 'wisdom', delta: 2 },
          { stat: 'renown', delta: 1 }
        ],
        setFlags: ['mentored']
      },
      {
        textKey: 'event.sect.opt2',
        effects: [
          { stat: 'strength', delta: 2 },
          { stat: 'renown', delta: 1 }
        ],
        setFlags: ['sparred']
      }
    ]
  },
  {
    id: 'market',
    titleKey: 'event.market.title',
    descKey: 'event.market.desc',
    category: 'conditional',
    locationId: 'market',
    durationDays: 1,
    options: [
      {
        textKey: 'event.market.opt1',
        effects: [
          { stat: 'strength', delta: 1 },
          { stat: 'morality', delta: 2 },
          { stat: 'renown', delta: 1 }
        ],
        setFlags: ['helped_vendor']
      },
      {
        textKey: 'event.market.opt2',
        effects: [
          { stat: 'wisdom', delta: 2 },
          { stat: 'wealth', delta: 1 }
        ],
        setFlags: ['brokered_deal']
      }
    ]
  },
  {
    id: 'bandit',
    titleKey: 'event.bandit.title',
    descKey: 'event.bandit.desc',
    category: 'conditional',
    locationId: 'road',
    waitDays: 2,
    durationDays: 2,
    options: [
      {
        textKey: 'event.bandit.opt1',
        waitDays: 2,
        effects: [
          { stat: 'strength', delta: 2 },
          { stat: 'renown', delta: 1 }
        ],
        setFlags: ['bandit_defeated']
      },
      {
        textKey: 'event.bandit.opt2',
        waitDays: 1,
        effects: [
          { stat: 'wealth', delta: -1 },
          { stat: 'wisdom', delta: 1 }
        ],
        setFlags: ['bandit_paid']
      }
    ]
  },
  {
    id: 'sword',
    titleKey: 'event.sword.title',
    descKey: 'event.sword.desc',
    category: 'conditional',
    locationId: 'mountain',
    waitDays: 2,
    durationDays: 2,
    options: [
      {
        textKey: 'event.sword.opt1',
        effects: [
          { stat: 'renown', delta: 2 },
          { stat: 'strength', delta: 1 },
          { stat: 'morality', delta: -1 }
        ],
        setFlags: ['took_sword']
      },
      {
        textKey: 'event.sword.opt2',
        effects: [
          { stat: 'morality', delta: 2 },
          { stat: 'wisdom', delta: 1 }
        ],
        setFlags: ['sealed_sword']
      }
    ]
  },
  {
    id: 'scholar',
    titleKey: 'event.scholar.title',
    descKey: 'event.scholar.desc',
    category: 'conditional',
    locationId: 'mountain',
    durationDays: 1,
    options: [
      {
        textKey: 'event.scholar.opt1',
        effects: [
          { stat: 'wisdom', delta: 2 },
          { stat: 'morality', delta: 1 }
        ]
      },
      {
        textKey: 'event.scholar.opt2',
        effects: [
          { stat: 'wealth', delta: -1 },
          { stat: 'wisdom', delta: 1 }
        ],
        setFlags: ['bought_secrets']
      }
    ]
  },
  {
    id: 'alliance',
    titleKey: 'event.alliance.title',
    descKey: 'event.alliance.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 2,
    options: [
      {
        textKey: 'event.alliance.opt1',
        effects: [
          { stat: 'wealth', delta: -1 },
          { stat: 'renown', delta: 2 }
        ],
        setFlags: ['allied']
      },
      {
        textKey: 'event.alliance.opt2',
        effects: [
          { stat: 'morality', delta: 2 },
          { stat: 'renown', delta: 1 }
        ],
        setFlags: ['allied']
      }
    ]
  },
  {
    id: 'assassin',
    titleKey: 'event.assassin.title',
    descKey: 'event.assassin.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 2,
    options: [
      {
        textKey: 'event.assassin.opt1',
        effects: [
          { stat: 'strength', delta: 2 },
          { stat: 'renown', delta: 1 }
        ]
      },
      {
        textKey: 'event.assassin.opt2',
        effects: [
          { stat: 'wisdom', delta: 2 },
          { stat: 'morality', delta: 1 }
        ],
        setFlags: ['outsmarted_assassin']
      }
    ]
  },
  {
    id: 'village',
    titleKey: 'event.village.title',
    descKey: 'event.village.desc',
    category: 'conditional',
    locationId: 'village',
    durationDays: 2,
    options: [
      {
        textKey: 'event.village.opt1',
        effects: [
          { stat: 'morality', delta: 2 },
          { stat: 'renown', delta: 1 },
          { stat: 'wealth', delta: -1 }
        ],
        setFlags: ['helped_village']
      },
      {
        textKey: 'event.village.opt2',
        effects: [
          { stat: 'wealth', delta: 1 },
          { stat: 'morality', delta: -1 }
        ]
      }
    ]
  },
  {
    id: 'tournament',
    titleKey: 'event.tournament.title',
    descKey: 'event.tournament.desc',
    category: 'conditional',
    locationId: 'sect',
    waitDays: 2,
    durationDays: 3,
    options: [
      {
        textKey: 'event.tournament.opt1',
        waitDays: 2,
        effects: [
          { stat: 'strength', delta: 2 },
          { stat: 'renown', delta: 2 }
        ],
        setFlags: ['tournament_won']
      },
      {
        textKey: 'event.tournament.opt2',
        waitDays: 1,
        effects: [
          { stat: 'wisdom', delta: 1 },
          { stat: 'renown', delta: 1 }
        ]
      }
    ]
  },
  {
    id: 'tavern',
    titleKey: 'event.tavern.title',
    descKey: 'event.tavern.desc',
    category: 'conditional',
    locationId: 'tavern',
    durationDays: 1,
    options: [
      {
        textKey: 'event.tavern.opt1',
        effects: [
          { stat: 'wisdom', delta: 2 },
          { stat: 'renown', delta: 1 }
        ],
        setFlags: ['intel_network']
      },
      {
        textKey: 'event.tavern.opt2',
        effects: [
          { stat: 'wealth', delta: -1 },
          { stat: 'renown', delta: 2 }
        ]
      }
    ]
  },
  {
    id: 'hero_swordsman',
    titleKey: 'event.hero.swordsman.title',
    descKey: 'event.hero.swordsman.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 1,
    options: [
      {
        textKey: 'event.hero.swordsman.opt1',
        effects: [{ stat: 'renown', delta: 1 }],
        relationEffects: [
          { stat: 'favor', delta: 2 },
          { stat: 'loyalty', delta: 1 }
        ],
        setFlags: ['met_swordsman']
      },
      {
        textKey: 'event.hero.swordsman.opt2',
        relationEffects: [{ stat: 'rivalry', delta: 1 }]
      }
    ]
  },
  {
    id: 'hero_sect',
    titleKey: 'event.hero.sect.title',
    descKey: 'event.hero.sect.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    options: [
      {
        textKey: 'event.hero.sect.opt1',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }]
      },
      {
        textKey: 'event.hero.sect.opt2',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 2 }]
      }
    ]
  },
  {
    id: 'hero_bond',
    titleKey: 'event.hero.bond.title',
    descKey: 'event.hero.bond.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 2,
    conditions: [{ type: 'relMin', stat: 'favor', value: 2 }],
    options: [
      {
        textKey: 'event.hero.bond.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 2 }]
      },
      {
        textKey: 'event.hero.bond.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [
          { stat: 'favor', delta: -1 },
          { stat: 'rivalry', delta: 1 }
        ]
      }
    ]
  },
  {
    id: 'line_alliance',
    titleKey: 'event.line.alliance.title',
    descKey: 'event.line.alliance.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 2,
    conditions: [{ type: 'relMin', stat: 'favor', value: 3 }],
    options: [
      {
        textKey: 'event.line.alliance.opt1',
        effects: [{ stat: 'renown', delta: 1 }],
        relationEffects: [
          { stat: 'favor', delta: 2 },
          { stat: 'loyalty', delta: 1 }
        ],
        setFlags: ['hero_alliance', 'alliance_stage1']
      },
      {
        textKey: 'event.line.alliance.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: -1 }]
      }
    ]
  },
  {
    id: 'line_assassin',
    titleKey: 'event.line.assassin.title',
    descKey: 'event.line.assassin.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 2,
    waitDays: 2,
    conditions: [{ type: 'relMin', stat: 'rivalry', value: 2 }],
    options: [
      {
        textKey: 'event.line.assassin.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['assassin_stage1']
      },
      {
        textKey: 'event.line.assassin.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: -1 }],
        setFlags: ['assassin_stage1']
      }
    ]
  },
  {
    id: 'line_oath',
    titleKey: 'event.line.oath.title',
    descKey: 'event.line.oath.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 2,
    waitDays: 2,
    conditions: [{ type: 'relMin', stat: 'loyalty', value: 2 }],
    options: [
      {
        textKey: 'event.line.oath.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 2 }],
        setFlags: ['oath_stage1']
      },
      {
        textKey: 'event.line.oath.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: -1 }],
        setFlags: ['oath_stage1']
      }
    ]
  },
  {
    id: 'line_sectprobe',
    titleKey: 'event.line.sectprobe.title',
    descKey: 'event.line.sectprobe.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [
      { type: 'statMin', stat: 'renown', value: 3 },
      { type: 'relMax', stat: 'rivalry', value: 4 }
    ],
    options: [
      {
        textKey: 'event.line.sectprobe.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['sect_stage1']
      },
      {
        textKey: 'event.line.sectprobe.opt2',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['sect_stage1']
      }
    ]
  },
  {
    id: 'line_sectinvite',
    titleKey: 'event.line.sectinvite.title',
    descKey: 'event.line.sectinvite.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 2,
    conditions: [
      { type: 'statMin', stat: 'renown', value: 4 },
      { type: 'relMin', stat: 'favor', value: 2 }
    ],
    options: [
      {
        textKey: 'event.line.sectinvite.opt1',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [
          { stat: 'favor', delta: 1 },
          { stat: 'loyalty', delta: 1 }
        ],
        setFlags: ['sect_invited', 'sect_stage2']
      },
      {
        textKey: 'event.line.sectinvite.opt2',
        effects: [{ stat: 'renown', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['sect_stage2']
      }
    ]
  },
  {
    id: 'line_sectsiege',
    titleKey: 'event.line.sectsiege.title',
    descKey: 'event.line.sectsiege.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 3,
    waitDays: 2,
    conditions: [
      { type: 'statMin', stat: 'renown', value: 5 },
      { type: 'relMin', stat: 'rivalry', value: 3 }
    ],
    options: [
      {
        textKey: 'event.line.sectsiege.opt1',
        waitDays: 1,
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: -1 }],
        setFlags: ['sect_stage3']
      },
      {
        textKey: 'event.line.sectsiege.opt2',
        waitDays: 2,
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['sect_stage3']
      }
    ]
  },
  {
    id: 'line_alliance_1',
    titleKey: 'event.line.alliance1.title',
    descKey: 'event.line.alliance1.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'alliance_stage1' }],
    options: [
      {
        textKey: 'event.line.alliance1.opt1',
        effects: [{ stat: 'renown', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['alliance_stage2']
      },
      {
        textKey: 'event.line.alliance1.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['alliance_stage2']
      }
    ]
  },
  {
    id: 'line_alliance_2',
    titleKey: 'event.line.alliance2.title',
    descKey: 'event.line.alliance2.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'alliance_stage2' }],
    options: [
      {
        textKey: 'event.line.alliance2.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['alliance_stage3']
      },
      {
        textKey: 'event.line.alliance2.opt2',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['alliance_stage3']
      }
    ]
  },
  {
    id: 'line_alliance_3',
    titleKey: 'event.line.alliance3.title',
    descKey: 'event.line.alliance3.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'alliance_stage3' }],
    options: [
      {
        textKey: 'event.line.alliance3.opt1',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['alliance_stage4']
      },
      {
        textKey: 'event.line.alliance3.opt2',
        effects: [{ stat: 'wealth', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['alliance_stage4']
      }
    ]
  },
  {
    id: 'line_alliance_4',
    titleKey: 'event.line.alliance4.title',
    descKey: 'event.line.alliance4.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'alliance_stage4' }],
    options: [
      {
        textKey: 'event.line.alliance4.opt1',
        effects: [{ stat: 'renown', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['alliance_stage5']
      },
      {
        textKey: 'event.line.alliance4.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: -1 }],
        setFlags: ['alliance_stage5']
      }
    ]
  },
  {
    id: 'line_alliance_5',
    titleKey: 'event.line.alliance5.title',
    descKey: 'event.line.alliance5.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'alliance_stage5' }],
    options: [
      {
        textKey: 'event.line.alliance5.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['alliance_stage6']
      },
      {
        textKey: 'event.line.alliance5.opt2',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['alliance_stage6']
      }
    ]
  },
  {
    id: 'line_alliance_6',
    titleKey: 'event.line.alliance6.title',
    descKey: 'event.line.alliance6.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'alliance_stage6' }],
    options: [
      {
        textKey: 'event.line.alliance6.opt1',
        effects: [{ stat: 'renown', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['alliance_stage7']
      },
      {
        textKey: 'event.line.alliance6.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['alliance_stage7']
      }
    ]
  },
  {
    id: 'line_alliance_7',
    titleKey: 'event.line.alliance7.title',
    descKey: 'event.line.alliance7.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'alliance_stage7' }],
    options: [
      {
        textKey: 'event.line.alliance7.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['alliance_stage8']
      },
      {
        textKey: 'event.line.alliance7.opt2',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['alliance_stage8']
      }
    ]
  },
  {
    id: 'line_alliance_8',
    titleKey: 'event.line.alliance8.title',
    descKey: 'event.line.alliance8.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'alliance_stage8' }],
    options: [
      {
        textKey: 'event.line.alliance8.opt1',
        effects: [{ stat: 'renown', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['alliance_stage9']
      },
      {
        textKey: 'event.line.alliance8.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['alliance_stage9']
      }
    ]
  },
  {
    id: 'line_alliance_9',
    titleKey: 'event.line.alliance9.title',
    descKey: 'event.line.alliance9.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'alliance_stage9' }],
    options: [
      {
        textKey: 'event.line.alliance9.opt1',
        effects: [{ stat: 'renown', delta: 1 }],
        relationEffects: [
          { stat: 'favor', delta: 2 },
          { stat: 'loyalty', delta: 1 }
        ],
        setFlags: ['ending_alliance'],
        endId: 'alliance'
      },
      {
        textKey: 'event.line.alliance9.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: -1 }],
        setFlags: ['ending_alliance'],
        endId: 'alliance'
      }
    ]
  },
  {
    id: 'line_assassin_1',
    titleKey: 'event.line.assassin1.title',
    descKey: 'event.line.assassin1.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'assassin_stage1' }],
    options: [
      {
        textKey: 'event.line.assassin1.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['assassin_stage2']
      },
      {
        textKey: 'event.line.assassin1.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: -1 }],
        setFlags: ['assassin_stage2']
      }
    ]
  },
  {
    id: 'line_assassin_2',
    titleKey: 'event.line.assassin2.title',
    descKey: 'event.line.assassin2.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'assassin_stage2' }],
    options: [
      {
        textKey: 'event.line.assassin2.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['assassin_stage3']
      },
      {
        textKey: 'event.line.assassin2.opt2',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: -1 }],
        setFlags: ['assassin_stage3']
      }
    ]
  },
  {
    id: 'line_assassin_3',
    titleKey: 'event.line.assassin3.title',
    descKey: 'event.line.assassin3.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'assassin_stage3' }],
    options: [
      {
        textKey: 'event.line.assassin3.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['assassin_stage4']
      },
      {
        textKey: 'event.line.assassin3.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: -1 }],
        setFlags: ['assassin_stage4']
      }
    ]
  },
  {
    id: 'line_assassin_4',
    titleKey: 'event.line.assassin4.title',
    descKey: 'event.line.assassin4.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'assassin_stage4' }],
    options: [
      {
        textKey: 'event.line.assassin4.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['assassin_stage5']
      },
      {
        textKey: 'event.line.assassin4.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: -1 }],
        setFlags: ['assassin_stage5']
      }
    ]
  },
  {
    id: 'line_assassin_5',
    titleKey: 'event.line.assassin5.title',
    descKey: 'event.line.assassin5.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'assassin_stage5' }],
    options: [
      {
        textKey: 'event.line.assassin5.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['assassin_stage6']
      },
      {
        textKey: 'event.line.assassin5.opt2',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: -1 }],
        setFlags: ['assassin_stage6']
      }
    ]
  },
  {
    id: 'line_assassin_6',
    titleKey: 'event.line.assassin6.title',
    descKey: 'event.line.assassin6.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'assassin_stage6' }],
    options: [
      {
        textKey: 'event.line.assassin6.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['assassin_stage7']
      },
      {
        textKey: 'event.line.assassin6.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: -1 }],
        setFlags: ['assassin_stage7']
      }
    ]
  },
  {
    id: 'line_assassin_7',
    titleKey: 'event.line.assassin7.title',
    descKey: 'event.line.assassin7.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'assassin_stage7' }],
    options: [
      {
        textKey: 'event.line.assassin7.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['assassin_stage8']
      },
      {
        textKey: 'event.line.assassin7.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: -1 }],
        setFlags: ['assassin_stage8']
      }
    ]
  },
  {
    id: 'line_assassin_8',
    titleKey: 'event.line.assassin8.title',
    descKey: 'event.line.assassin8.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'assassin_stage8' }],
    options: [
      {
        textKey: 'event.line.assassin8.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['assassin_stage9']
      },
      {
        textKey: 'event.line.assassin8.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: -1 }],
        setFlags: ['assassin_stage9']
      }
    ]
  },
  {
    id: 'line_assassin_9',
    titleKey: 'event.line.assassin9.title',
    descKey: 'event.line.assassin9.desc',
    category: 'conditional',
    locationId: 'road',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'assassin_stage9' }],
    options: [
      {
        textKey: 'event.line.assassin9.opt1',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['ending_vendetta'],
        endId: 'vendetta'
      },
      {
        textKey: 'event.line.assassin9.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: -1 }],
        setFlags: ['ending_vendetta'],
        endId: 'vendetta'
      }
    ]
  },
  {
    id: 'line_oath_1',
    titleKey: 'event.line.oath1.title',
    descKey: 'event.line.oath1.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'oath_stage1' }],
    options: [
      {
        textKey: 'event.line.oath1.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['oath_stage2']
      },
      {
        textKey: 'event.line.oath1.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['oath_stage2']
      }
    ]
  },
  {
    id: 'line_oath_2',
    titleKey: 'event.line.oath2.title',
    descKey: 'event.line.oath2.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'oath_stage2' }],
    options: [
      {
        textKey: 'event.line.oath2.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['oath_stage3']
      },
      {
        textKey: 'event.line.oath2.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['oath_stage3']
      }
    ]
  },
  {
    id: 'line_oath_3',
    titleKey: 'event.line.oath3.title',
    descKey: 'event.line.oath3.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'oath_stage3' }],
    options: [
      {
        textKey: 'event.line.oath3.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['oath_stage4']
      },
      {
        textKey: 'event.line.oath3.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['oath_stage4']
      }
    ]
  },
  {
    id: 'line_oath_4',
    titleKey: 'event.line.oath4.title',
    descKey: 'event.line.oath4.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'oath_stage4' }],
    options: [
      {
        textKey: 'event.line.oath4.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['oath_stage5']
      },
      {
        textKey: 'event.line.oath4.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['oath_stage5']
      }
    ]
  },
  {
    id: 'line_oath_5',
    titleKey: 'event.line.oath5.title',
    descKey: 'event.line.oath5.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'oath_stage5' }],
    options: [
      {
        textKey: 'event.line.oath5.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['oath_stage6']
      },
      {
        textKey: 'event.line.oath5.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['oath_stage6']
      }
    ]
  },
  {
    id: 'line_oath_6',
    titleKey: 'event.line.oath6.title',
    descKey: 'event.line.oath6.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'oath_stage6' }],
    options: [
      {
        textKey: 'event.line.oath6.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['oath_stage7']
      },
      {
        textKey: 'event.line.oath6.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['oath_stage7']
      }
    ]
  },
  {
    id: 'line_oath_7',
    titleKey: 'event.line.oath7.title',
    descKey: 'event.line.oath7.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'oath_stage7' }],
    options: [
      {
        textKey: 'event.line.oath7.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['oath_stage8']
      },
      {
        textKey: 'event.line.oath7.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['oath_stage8']
      }
    ]
  },
  {
    id: 'line_oath_8',
    titleKey: 'event.line.oath8.title',
    descKey: 'event.line.oath8.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'oath_stage8' }],
    options: [
      {
        textKey: 'event.line.oath8.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 1 }],
        setFlags: ['oath_stage9']
      },
      {
        textKey: 'event.line.oath8.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['oath_stage9']
      }
    ]
  },
  {
    id: 'line_oath_9',
    titleKey: 'event.line.oath9.title',
    descKey: 'event.line.oath9.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'oath_stage9' }],
    options: [
      {
        textKey: 'event.line.oath9.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'loyalty', delta: 2 }],
        setFlags: ['ending_oath'],
        endId: 'oath'
      },
      {
        textKey: 'event.line.oath9.opt2',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['ending_oath'],
        endId: 'oath'
      }
    ]
  },
  {
    id: 'line_sect_1',
    titleKey: 'event.line.sect1.title',
    descKey: 'event.line.sect1.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'sect_stage1' }],
    options: [
      {
        textKey: 'event.line.sect1.opt1',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['sect_stage4']
      },
      {
        textKey: 'event.line.sect1.opt2',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['sect_stage4']
      }
    ]
  },
  {
    id: 'line_sect_2',
    titleKey: 'event.line.sect2.title',
    descKey: 'event.line.sect2.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'sect_stage2' }],
    options: [
      {
        textKey: 'event.line.sect2.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['sect_stage5']
      },
      {
        textKey: 'event.line.sect2.opt2',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['sect_stage5']
      }
    ]
  },
  {
    id: 'line_sect_3',
    titleKey: 'event.line.sect3.title',
    descKey: 'event.line.sect3.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'sect_stage3' }],
    options: [
      {
        textKey: 'event.line.sect3.opt1',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['sect_stage6']
      },
      {
        textKey: 'event.line.sect3.opt2',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['sect_stage6']
      }
    ]
  },
  {
    id: 'line_sect_4',
    titleKey: 'event.line.sect4.title',
    descKey: 'event.line.sect4.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'sect_stage4' }],
    options: [
      {
        textKey: 'event.line.sect4.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['sect_stage7']
      },
      {
        textKey: 'event.line.sect4.opt2',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['sect_stage7']
      }
    ]
  },
  {
    id: 'line_sect_5',
    titleKey: 'event.line.sect5.title',
    descKey: 'event.line.sect5.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'sect_stage5' }],
    options: [
      {
        textKey: 'event.line.sect5.opt1',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['sect_stage7']
      },
      {
        textKey: 'event.line.sect5.opt2',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['sect_stage7']
      }
    ]
  },
  {
    id: 'line_sect_6',
    titleKey: 'event.line.sect6.title',
    descKey: 'event.line.sect6.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'sect_stage6' }],
    options: [
      {
        textKey: 'event.line.sect6.opt1',
        effects: [{ stat: 'morality', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 1 }],
        setFlags: ['sect_stage7']
      },
      {
        textKey: 'event.line.sect6.opt2',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['sect_stage7']
      }
    ]
  },
  {
    id: 'line_sect_7',
    titleKey: 'event.line.sect7.title',
    descKey: 'event.line.sect7.desc',
    category: 'conditional',
    locationId: 'sect',
    durationDays: 1,
    conditions: [{ type: 'flag', flag: 'sect_stage7' }],
    options: [
      {
        textKey: 'event.line.sect7.opt1',
        effects: [{ stat: 'wisdom', delta: 1 }],
        relationEffects: [{ stat: 'favor', delta: 2 }],
        setFlags: ['ending_sect'],
        endId: 'sect'
      },
      {
        textKey: 'event.line.sect7.opt2',
        effects: [{ stat: 'strength', delta: 1 }],
        relationEffects: [{ stat: 'rivalry', delta: 1 }],
        setFlags: ['ending_sect'],
        endId: 'sect'
      }
    ]
  },
  {
    id: 'crossroad',
    titleKey: 'event.crossroad.title',
    descKey: 'event.crossroad.desc',
    category: 'fixed',
    locationId: 'road',
    durationDays: 2,
    fixedDate: { year: 1, month: 3, day: 1 },
    options: [
      {
        textKey: 'event.crossroad.opt1',
        effects: [
          { stat: 'morality', delta: 2 },
          { stat: 'renown', delta: 2 }
        ],
        endId: 'hero'
      },
      {
        textKey: 'event.crossroad.opt2',
        effects: [
          { stat: 'wealth', delta: 2 },
          { stat: 'wisdom', delta: 1 },
          { stat: 'morality', delta: -2 }
        ],
        endId: 'lord'
      }
    ]
  },
  {
    id: 'random_herb',
    titleKey: 'event.random.herb.title',
    descKey: 'event.random.herb.desc',
    random: true,
    category: 'random',
    repeatable: true,
    locationId: 'mountain',
    durationDays: 1,
    randomChance: { base: 0.18, scale: { luck: 0.02, wisdom: 0.01 } },
    options: [
      {
        textKey: 'event.random.herb.opt1',
        effects: [
          { stat: 'strength', delta: 1 },
          { stat: 'wisdom', delta: 1 }
        ],
        randomRewards: [{ stat: 'luck', min: 0, max: 1, scaleStat: 'luck', scaleFactor: 0.1 }]
      },
      {
        textKey: 'event.random.herb.opt2',
        effects: [
          { stat: 'wealth', delta: 1 },
          { stat: 'morality', delta: -1 }
        ],
        randomRewards: [{ stat: 'luck', min: 0, max: 1, scaleStat: 'luck', scaleFactor: 0.1 }]
      }
    ]
  },
  {
    id: 'random_inn',
    titleKey: 'event.random.inn.title',
    descKey: 'event.random.inn.desc',
    random: true,
    category: 'random',
    repeatable: true,
    locationId: 'tavern',
    durationDays: 1,
    randomChance: { base: 0.16, scale: { luck: 0.02, morality: 0.01 } },
    options: [
      {
        textKey: 'event.random.inn.opt1',
        effects: [
          { stat: 'morality', delta: 1 },
          { stat: 'wisdom', delta: 1 }
        ],
        randomRewards: [{ stat: 'luck', min: 0, max: 1, scaleStat: 'luck', scaleFactor: 0.1 }]
      },
      {
        textKey: 'event.random.inn.opt2',
        effects: [
          { stat: 'strength', delta: 1 },
          { stat: 'renown', delta: 1 }
        ],
        randomRewards: [{ stat: 'luck', min: 0, max: 1, scaleStat: 'luck', scaleFactor: 0.1 }]
      }
    ]
  },
  {
    id: 'random_rain',
    titleKey: 'event.random.rain.title',
    descKey: 'event.random.rain.desc',
    random: true,
    category: 'random',
    repeatable: true,
    locationId: 'road',
    durationDays: 1,
    randomChance: { base: 0.2, scale: { luck: 0.02, strength: 0.01 } },
    options: [
      {
        textKey: 'event.random.rain.opt1',
        effects: [
          { stat: 'strength', delta: 1 },
          { stat: 'wealth', delta: -1 }
        ],
        randomRewards: [{ stat: 'luck', min: 0, max: 1, scaleStat: 'luck', scaleFactor: 0.1 }]
      },
      {
        textKey: 'event.random.rain.opt2',
        effects: [
          { stat: 'wisdom', delta: 1 },
          { stat: 'morality', delta: 1 }
        ],
        randomRewards: [{ stat: 'luck', min: 0, max: 1, scaleStat: 'luck', scaleFactor: 0.1 }]
      }
    ]
  },
  {
    id: 'random_gift',
    titleKey: 'event.random.gift.title',
    descKey: 'event.random.gift.desc',
    random: true,
    category: 'random',
    repeatable: true,
    locationId: 'market',
    durationDays: 1,
    randomChance: { base: 0.15, scale: { luck: 0.03, renown: 0.01 } },
    options: [
      {
        textKey: 'event.random.gift.opt1',
        effects: [
          { stat: 'wealth', delta: 1 },
          { stat: 'renown', delta: 1 }
        ],
        randomRewards: [
          { stat: 'luck', min: 0, max: 1, scaleStat: 'luck', scaleFactor: 0.1 },
          { stat: 'wealth', min: 0, max: 1, scaleStat: 'luck', scaleFactor: 0.2 }
        ]
      },
      {
        textKey: 'event.random.gift.opt2',
        effects: [
          { stat: 'morality', delta: 1 },
          { stat: 'wisdom', delta: 1 }
        ],
        randomRewards: [{ stat: 'luck', min: 0, max: 1, scaleStat: 'luck', scaleFactor: 0.1 }]
      }
    ]
  },
  {
    id: 'random_bounty',
    titleKey: 'event.random.bounty.title',
    descKey: 'event.random.bounty.desc',
    random: true,
    category: 'random',
    repeatable: true,
    locationId: 'market',
    durationDays: 1,
    randomChance: { base: 0.14, scale: { luck: 0.02, wisdom: 0.02 } },
    options: [
      {
        textKey: 'event.random.bounty.opt1',
        randomRewards: [
          { stat: 'wealth', min: 0, max: 2, scaleStat: 'wisdom', scaleFactor: 0.4 },
          { stat: 'renown', min: 0, max: 1, scaleStat: 'wisdom', scaleFactor: 0.2 },
          { stat: 'luck', min: 0, max: 1, scaleStat: 'luck', scaleFactor: 0.15 }
        ]
      },
      {
        textKey: 'event.random.bounty.opt2',
        randomRewards: [
          { stat: 'wisdom', min: 0, max: 1, scaleStat: 'wisdom', scaleFactor: 0.3 },
          { stat: 'wealth', min: 0, max: 1, scaleStat: 'wisdom', scaleFactor: 0.2 },
          { stat: 'luck', min: 0, max: 1, scaleStat: 'luck', scaleFactor: 0.15 }
        ]
      }
    ]
  }
]
