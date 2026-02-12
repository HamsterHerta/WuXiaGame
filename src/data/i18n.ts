export type Lang = 'zh' | 'en'

// 多语言文案表：
// - key 统一由业务层引用（事件、按钮、状态名称等）
// - 新增事件时需同步补齐 title/desc/opt 文案
export const i18n = {
  'app.title': { zh: '江湖权谋', en: 'Wuxia Reign' },
  'app.subtitle': { zh: '一念抉择，命途江湖', en: 'One choice, a different fate.' },
  'app.start': { zh: '新开江湖', en: 'New Journey' },
  'app.continue': { zh: '继续江湖', en: 'Continue' },
  'app.reset': { zh: '清除存档', en: 'Clear Save' },
  'app.settings': { zh: '设定', en: 'Settings' },
  'app.day': { zh: '行旅第', en: 'Day' },
  'app.daySuffix': { zh: '日', en: '' },
  'app.date': { zh: '行旅', en: 'Date' },
  'app.location': { zh: '地点', en: 'Location' },
  'app.hud.renown': { zh: '名望', en: 'Renown' },
  'app.hud.strength': { zh: '武力', en: 'Strength' },
  'app.hud.wisdom': { zh: '智谋', en: 'Wisdom' },
  'app.hud.wealth': { zh: '财势', en: 'Wealth' },
  'app.hud.morality': { zh: '侠义', en: 'Morality' },
  'app.hud.luck': { zh: '运气', en: 'Luck' },
  'location.road': { zh: '官道', en: 'Road' },
  'location.sect': { zh: '名门', en: 'Sect' },
  'location.market': { zh: '市井', en: 'Market' },
  'location.tavern': { zh: '酒楼', en: 'Tavern' },
  'location.village': { zh: '山村', en: 'Village' },
  'location.mountain': { zh: '山林', en: 'Mountains' },
  'app.end.title': { zh: '结局', en: 'Ending' },
  'app.end.restart': { zh: '再入江湖', en: 'Restart' },
  'app.lang.zh': { zh: '中文', en: '中文' },
  'app.lang.en': { zh: 'English', en: 'English' },
  'app.notice.saved': { zh: '已自动存档', en: 'Auto-saved' },
  'app.notice.nosave': { zh: '暂无存档', en: 'No save data' },

  'event.start.title': { zh: '入世', en: 'Into the World' },
  'event.start.desc': {
    zh: '你自山门下山，囊中无物，却立志改写江湖。',
    en: 'You leave the mountain gate, penniless yet determined to reshape the jianghu.'
  },
  'event.start.opt1': { zh: '先访名门', en: 'Seek the grand sects' },
  'event.start.opt2': { zh: '先入市井', en: 'Walk the streets' },

  'event.sect.title': { zh: '名门相邀', en: 'Grand Sect Invitation' },
  'event.sect.desc': {
    zh: '名门长老试你根骨，愿为你引荐江湖。',
    en: 'An elder tests your potential and offers a path into the jianghu.'
  },
  'event.sect.opt1': { zh: '献上机敏', en: 'Show your wit' },
  'event.sect.opt2': { zh: '亮出身手', en: 'Display your prowess' },

  'event.market.title': { zh: '市井风波', en: 'Street Tides' },
  'event.market.desc': {
    zh: '小贩遭地头蛇勒索，百姓观望。',
    en: 'Thugs extort a vendor while the crowd watches.'
  },
  'event.market.opt1': { zh: '拔剑相助', en: 'Step in with a blade' },
  'event.market.opt2': { zh: '暗中谈判', en: 'Negotiate in secret' },

  'event.bandit.title': { zh: '山道伏击', en: 'Ambush on the Ridge' },
  'event.bandit.desc': {
    zh: '一伙山匪伏击行商，你被迫卷入。',
    en: 'Bandits ambush a caravan; you are pulled into the fray.'
  },
  'event.bandit.opt1': { zh: '硬拼突围', en: 'Fight through' },
  'event.bandit.opt2': { zh: '分银平息', en: 'Pay them off' },

  'event.sword.title': { zh: '古剑出世', en: 'An Ancient Sword' },
  'event.sword.desc': {
    zh: '传闻古剑现世，可助你扬名，也招惹觊觎。',
    en: 'A legendary sword appears, promising renown and danger.'
  },
  'event.sword.opt1': { zh: '取剑扬名', en: 'Claim it for fame' },
  'event.sword.opt2': { zh: '封剑藏锋', en: 'Hide its edge' },

  'event.scholar.title': { zh: '隐士论道', en: 'Hermit Discourse' },
  'event.scholar.desc': {
    zh: '隐士指点你江湖棋局的走法。',
    en: 'A hermit teaches you the strategy of jianghu.'
  },
  'event.scholar.opt1': { zh: '静心受教', en: 'Listen and learn' },
  'event.scholar.opt2': { zh: '以利相求', en: 'Offer reward for secrets' },

  'event.alliance.title': { zh: '结盟时刻', en: 'Moment of Alliance' },
  'event.alliance.desc': {
    zh: '一股势力愿与您结盟，但需诚意。',
    en: 'A force offers alliance if you show sincerity.'
  },
  'event.alliance.opt1': { zh: '捐出财力', en: 'Donate wealth' },
  'event.alliance.opt2': { zh: '以义动人', en: 'Appeal to honor' },

  'event.assassin.title': { zh: '夜袭', en: 'Night Assault' },
  'event.assassin.desc': {
    zh: '杀手夜袭而至，试探你的根基。',
    en: 'Assassins strike at night to test your foundation.'
  },
  'event.assassin.opt1': { zh: '以力破局', en: 'Break through by force' },
  'event.assassin.opt2': { zh: '以智布局', en: 'Outmaneuver them' },

  'event.village.title': { zh: '山村疫疾', en: 'Plague in the Village' },
  'event.village.desc': {
    zh: '山村染疾，无人敢入。',
    en: 'A village is struck by illness; none dare to enter.'
  },
  'event.village.opt1': { zh: '援助村民', en: 'Aid the villagers' },
  'event.village.opt2': { zh: '避开此地', en: 'Avoid the area' },

  'event.tournament.title': { zh: '比武招亲', en: 'Martial Match' },
  'event.tournament.desc': {
    zh: '名门擂台开启，胜者名扬天下。',
    en: 'A grand tournament opens; victory brings fame.'
  },
  'event.tournament.opt1': { zh: '登台一试', en: 'Enter the ring' },
  'event.tournament.opt2': { zh: '暗中观察', en: 'Observe quietly' },

  'event.tavern.title': { zh: '酒楼传闻', en: 'Tavern Rumors' },
  'event.tavern.desc': {
    zh: '酒楼里各路消息汇聚，你可择机而动。',
    en: 'Rumors gather at the tavern; you can act on them.'
  },
  'event.tavern.opt1': { zh: '收集情报', en: 'Gather intelligence' },
  'event.tavern.opt2': { zh: '散财结交', en: 'Spend to make friends' },

  'event.crossroad.title': { zh: '岔路抉择', en: 'Crossroads' },
  'event.crossroad.desc': {
    zh: '江湖纷争已至，你的选择将定局。',
    en: 'The jianghu conflict peaks; your choice decides the outcome.'
  },
  'event.crossroad.opt1': { zh: '扶正压邪', en: 'Uphold righteousness' },
  'event.crossroad.opt2': { zh: '坐收渔利', en: 'Profit from chaos' },

  'event.random.herb.title': { zh: '草药奇遇', en: 'Herb Encounter' },
  'event.random.herb.desc': {
    zh: '山间采得灵草，可助修行，也可换取银两。',
    en: 'You find rare herbs; use them or sell for coin.'
  },
  'event.random.herb.opt1': { zh: '炼化修行', en: 'Refine for training' },
  'event.random.herb.opt2': { zh: '卖给药铺', en: 'Sell to apothecary' },

  'event.random.inn.title': { zh: '客栈插曲', en: 'Inn Interlude' },
  'event.random.inn.desc': {
    zh: '客栈里传来争执，你可出面调停。',
    en: 'A dispute erupts at the inn; you may mediate.'
  },
  'event.random.inn.opt1': { zh: '和气生财', en: 'Calm them down' },
  'event.random.inn.opt2': { zh: '出手立威', en: 'Show authority' },

  'event.random.rain.title': { zh: '骤雨夜行', en: 'Stormy Night' },
  'event.random.rain.desc': {
    zh: '暴雨阻路，你需决定行程。',
    en: 'Heavy rain blocks the path; decide how to proceed.'
  },
  'event.random.rain.opt1': { zh: '冒雨赶路', en: 'Press on' },
  'event.random.rain.opt2': { zh: '择地歇脚', en: 'Seek shelter' },

  'event.random.gift.title': { zh: '无名赠礼', en: 'Anonymous Gift' },
  'event.random.gift.desc': {
    zh: '有人悄然放下包裹，似有所图。',
    en: 'A package appears at your door, with unknown intent.'
  },
  'event.random.gift.opt1': { zh: '收下观察', en: 'Accept and observe' },
  'event.random.gift.opt2': { zh: '谨慎退回', en: 'Return it' },

  'event.random.bounty.title': { zh: '悬赏告示', en: 'Bounty Notice' },
  'event.random.bounty.desc': {
    zh: '城门张贴悬赏，你熟知江湖规矩，可能获利更多。',
    en: 'A bounty is posted. Your knowledge of jianghu may increase the reward.'
  },
  'event.random.bounty.opt1': { zh: '接取任务', en: 'Take the bounty' },
  'event.random.bounty.opt2': { zh: '先探虚实', en: 'Investigate first' },

  'event.hero.swordsman.title': { zh: '侠客相逢', en: 'Meet the Swordsman' },
  'event.hero.swordsman.desc': {
    zh: '一位行侠多年的剑客邀你同行一段。',
    en: 'A seasoned swordsman invites you to travel together.'
  },
  'event.hero.swordsman.opt1': { zh: '共行互助', en: 'Travel together' },
  'event.hero.swordsman.opt2': { zh: '婉拒独行', en: 'Decline politely' },

  'event.hero.sect.title': { zh: '他派相访', en: 'Rival Sect Visit' },
  'event.hero.sect.desc': {
    zh: '他派前来探虚实，语气不善。',
    en: 'A rival sect approaches with sharp words.'
  },
  'event.hero.sect.opt1': { zh: '以礼相待', en: 'Treat them with respect' },
  'event.hero.sect.opt2': { zh: '强硬回击', en: 'Respond firmly' },

  'event.hero.bond.title': { zh: '情义试炼', en: 'Bond of Honor' },
  'event.hero.bond.desc': {
    zh: '旧识求援，事关生死，你需权衡。',
    en: 'An old ally seeks help; lives are at stake.'
  },
  'event.hero.bond.opt1': { zh: '倾力相助', en: 'Offer full aid' },
  'event.hero.bond.opt2': { zh: '量力而行', en: 'Help cautiously' },

  'event.line.alliance.title': { zh: '名侠结盟', en: 'Alliance of Heroes' },
  'event.line.alliance.desc': {
    zh: '侠名远播，引得名侠来投，愿同你行侠。',
    en: 'Your fame draws a renowned hero who seeks alliance.'
  },
  'event.line.alliance.opt1': { zh: '结盟同行', en: 'Form the alliance' },
  'event.line.alliance.opt2': { zh: '各行其是', en: 'Walk separate paths' },

  'event.line.assassin.title': { zh: '仇敌暗算', en: 'Rival’s Ambush' },
  'event.line.assassin.desc': {
    zh: '仇敌设局，你若不慎，恐命丧江湖。',
    en: 'Rivals set a trap; a misstep could end your journey.'
  },
  'event.line.assassin.opt1': { zh: '正面迎敌', en: 'Confront head-on' },
  'event.line.assassin.opt2': { zh: '以计破局', en: 'Outwit the trap' },

  'event.line.oath.title': { zh: '生死相托', en: 'Oath of Life and Death' },
  'event.line.oath.desc': {
    zh: '挚友托付至亲，愿以命相随。',
    en: 'A close ally entrusts their kin to you, vowing loyalty.'
  },
  'event.line.oath.opt1': { zh: '受托护佑', en: 'Accept the oath' },
  'event.line.oath.opt2': { zh: '婉言谢绝', en: 'Decline politely' },

  'event.line.sectprobe.title': { zh: '门派试探', en: 'Sect Probe' },
  'event.line.sectprobe.desc': {
    zh: '他派派人试探你虚实，言语暗藏锋芒。',
    en: 'Another sect probes your strength with veiled words.'
  },
  'event.line.sectprobe.opt1': { zh: '以礼相答', en: 'Answer with courtesy' },
  'event.line.sectprobe.opt2': { zh: '示强压势', en: 'Show force' },

  'event.line.sectinvite.title': { zh: '门派邀约', en: 'Sect Invitation' },
  'event.line.sectinvite.desc': {
    zh: '大派递来请柬，愿你暂驻山门。',
    en: 'A major sect invites you to stay and teach.'
  },
  'event.line.sectinvite.opt1': { zh: '欣然应允', en: 'Accept the invitation' },
  'event.line.sectinvite.opt2': { zh: '推辞继续', en: 'Decline and continue' },

  'event.line.sectsiege.title': { zh: '围剿风声', en: 'Rumors of a Siege' },
  'event.line.sectsiege.desc': {
    zh: '多派欲合围清剿，你的名声或成累赘。',
    en: 'Multiple sects consider a purge; your name is involved.'
  },
  'event.line.sectsiege.opt1': { zh: '先行调停', en: 'Seek mediation' },
  'event.line.sectsiege.opt2': { zh: '备战突围', en: 'Prepare to break through' },

  'event.line.alliance1.title': { zh: '盟友试义', en: 'Test of Honor' },
  'event.line.alliance1.desc': { zh: '盟友试你心性，愿托重任。', en: 'Allies test your resolve with a heavy request.' },
  'event.line.alliance1.opt1': { zh: '应承出手', en: 'Accept the request' },
  'event.line.alliance1.opt2': { zh: '审慎观望', en: 'Observe first' },
  'event.line.alliance2.title': { zh: '并肩出手', en: 'Side by Side' },
  'event.line.alliance2.desc': { zh: '你与盟友共御强敌。', en: 'You and allies face a formidable foe.' },
  'event.line.alliance2.opt1': { zh: '正面攻坚', en: 'Frontal assault' },
  'event.line.alliance2.opt2': { zh: '以义稳心', en: 'Steady with honor' },
  'event.line.alliance3.title': { zh: '盟中裂隙', en: 'Cracks Within' },
  'event.line.alliance3.desc': { zh: '盟中争执渐起，需要调和。', en: 'Disputes rise within the alliance.' },
  'event.line.alliance3.opt1': { zh: '调停纷争', en: 'Mediate' },
  'event.line.alliance3.opt2': { zh: '以利安众', en: 'Stabilize with gains' },
  'event.line.alliance4.title': { zh: '共守一城', en: 'Defend the City' },
  'event.line.alliance4.desc': { zh: '盟军守城，敌势逼近。', en: 'The alliance defends a city under threat.' },
  'event.line.alliance4.opt1': { zh: '振奋士气', en: 'Rally morale' },
  'event.line.alliance4.opt2': { zh: '布阵守势', en: 'Set defenses' },
  'event.line.alliance5.title': { zh: '推举领袖', en: 'Choose a Leader' },
  'event.line.alliance5.desc': { zh: '盟中推举盟主，你被推上风口。', en: 'The alliance seeks a leader.' },
  'event.line.alliance5.opt1': { zh: '担责领盟', en: 'Accept leadership' },
  'event.line.alliance5.opt2': { zh: '谦让他人', en: 'Yield to others' },
  'event.line.alliance6.title': { zh: '外敌来犯', en: 'Outer Threat' },
  'event.line.alliance6.desc': { zh: '外敌来犯，盟约需兑现。', en: 'External enemies test the pact.' },
  'event.line.alliance6.opt1': { zh: '率先迎敌', en: 'Lead the charge' },
  'event.line.alliance6.opt2': { zh: '稳住阵脚', en: 'Hold position' },
  'event.line.alliance7.title': { zh: '盟誓重申', en: 'Renew the Oath' },
  'event.line.alliance7.desc': { zh: '盟誓将散，需你稳住人心。', en: 'The oath weakens; morale must be restored.' },
  'event.line.alliance7.opt1': { zh: '重申盟誓', en: 'Renew the oath' },
  'event.line.alliance7.opt2': { zh: '以义服人', en: 'Lead by honor' },
  'event.line.alliance8.title': { zh: '正邪抉择', en: 'Righteous Choice' },
  'event.line.alliance8.desc': { zh: '盟中分歧渐深，正邪分途。', en: 'The alliance splits on right and wrong.' },
  'event.line.alliance8.opt1': { zh: '执守正道', en: 'Hold the righteous path' },
  'event.line.alliance8.opt2': { zh: '权衡大局', en: 'Weigh the greater good' },
  'event.line.alliance9.title': { zh: '江湖盟主', en: 'Leader of the Alliance' },
  'event.line.alliance9.desc': { zh: '江湖同道推你为盟主。', en: 'You are chosen as leader of the alliance.' },
  'event.line.alliance9.opt1': { zh: '受命担纲', en: 'Accept the mantle' },
  'event.line.alliance9.opt2': { zh: '改立共治', en: 'Propose shared rule' },

  'event.line.assassin1.title': { zh: '夜色追踪', en: 'Shadow Pursuit' },
  'event.line.assassin1.desc': { zh: '夜色之下，你循迹而动。', en: 'You trace steps through the night.' },
  'event.line.assassin1.opt1': { zh: '强势追击', en: 'Pursue boldly' },
  'event.line.assassin1.opt2': { zh: '谨慎隐行', en: 'Move cautiously' },
  'event.line.assassin2.title': { zh: '线索浮现', en: 'Clues Emerge' },
  'event.line.assassin2.desc': { zh: '幕后线索渐明。', en: 'Clues reveal the mastermind.' },
  'event.line.assassin2.opt1': { zh: '循线追查', en: 'Follow the trail' },
  'event.line.assassin2.opt2': { zh: '以德止杀', en: 'Restrain yourself' },
  'event.line.assassin3.title': { zh: '血债清单', en: 'Blood Ledger' },
  'event.line.assassin3.desc': { zh: '仇怨成册，杀机渐近。', en: 'A ledger of grudges surfaces.' },
  'event.line.assassin3.opt1': { zh: '以牙还牙', en: 'Return the strike' },
  'event.line.assassin3.opt2': { zh: '以智化解', en: 'Dissolve it wisely' },
  'event.line.assassin4.title': { zh: '暗桩逼近', en: 'Hidden Agents' },
  'event.line.assassin4.desc': { zh: '暗桩逼近，危机四伏。', en: 'Hidden agents close in.' },
  'event.line.assassin4.opt1': { zh: '强攻破局', en: 'Break through' },
  'event.line.assassin4.opt2': { zh: '分化敌心', en: 'Sow discord' },
  'event.line.assassin5.title': { zh: '旧仇再起', en: 'Old Grudge' },
  'event.line.assassin5.desc': { zh: '旧仇现身，挑起血战。', en: 'An old foe resurfaces.' },
  'event.line.assassin5.opt1': { zh: '迎战到底', en: 'Fight to the end' },
  'event.line.assassin5.opt2': { zh: '暂避锋芒', en: 'Avoid the edge' },
  'event.line.assassin6.title': { zh: '孤身潜行', en: 'Lone Infiltration' },
  'event.line.assassin6.desc': { zh: '你独自潜行敌营。', en: 'You infiltrate alone.' },
  'event.line.assassin6.opt1': { zh: '直取首领', en: 'Strike the leader' },
  'event.line.assassin6.opt2': { zh: '破坏要害', en: 'Sabotage key points' },
  'event.line.assassin7.title': { zh: '正面对决', en: 'Direct Duel' },
  'event.line.assassin7.desc': { zh: '敌手现身，约你一战。', en: 'Your rival challenges you.' },
  'event.line.assassin7.opt1': { zh: '应战决胜', en: 'Accept the duel' },
  'event.line.assassin7.opt2': { zh: '谋后再战', en: 'Delay for advantage' },
  'event.line.assassin8.title': { zh: '以牙还牙', en: 'Eye for an Eye' },
  'event.line.assassin8.desc': { zh: '你决定以其人之道还治其人之身。', en: 'You return their tactics upon them.' },
  'event.line.assassin8.opt1': { zh: '强势反击', en: 'Counterattack' },
  'event.line.assassin8.opt2': { zh: '冷静布局', en: 'Plan calmly' },
  'event.line.assassin9.title': { zh: '宿敌覆灭', en: 'Rival’s End' },
  'event.line.assassin9.desc': { zh: '宿敌终于伏诛。', en: 'The rival falls at last.' },
  'event.line.assassin9.opt1': { zh: '手刃仇敌', en: 'Deliver the final blow' },
  'event.line.assassin9.opt2': { zh: '留其一命', en: 'Spare them' },

  'event.line.oath1.title': { zh: '托孤之约', en: 'Guardian’s Oath' },
  'event.line.oath1.desc': { zh: '受托护送，义字当前。', en: 'You are entrusted with a solemn task.' },
  'event.line.oath1.opt1': { zh: '立即启程', en: 'Depart at once' },
  'event.line.oath1.opt2': { zh: '周密筹备', en: 'Prepare carefully' },
  'event.line.oath2.title': { zh: '护送路途', en: 'Escort on the Road' },
  'event.line.oath2.desc': { zh: '路途艰险，需你定夺。', en: 'The road is perilous.' },
  'event.line.oath2.opt1': { zh: '直行要道', en: 'Take the main road' },
  'event.line.oath2.opt2': { zh: '绕道隐行', en: 'Take a hidden path' },
  'event.line.oath3.title': { zh: '义气纠纷', en: 'Ties of Honor' },
  'event.line.oath3.desc': { zh: '义友起争，你需斡旋。', en: 'Allies clash over honor.' },
  'event.line.oath3.opt1': { zh: '调停和解', en: 'Mend the rift' },
  'event.line.oath3.opt2': { zh: '各自担当', en: 'Let them decide' },
  'event.line.oath4.title': { zh: '生死一诺', en: 'A Life-and-Death Promise' },
  'event.line.oath4.desc': { zh: '你许下生死之诺。', en: 'You swear a life-and-death vow.' },
  'event.line.oath4.opt1': { zh: '守诺到底', en: 'Keep the vow' },
  'event.line.oath4.opt2': { zh: '留有余地', en: 'Keep a reserve' },
  'event.line.oath5.title': { zh: '义盟聚首', en: 'Brotherhood Gathering' },
  'event.line.oath5.desc': { zh: '义盟齐聚，众望所归。', en: 'The brotherhood gathers.' },
  'event.line.oath5.opt1': { zh: '以义为先', en: 'Honor first' },
  'event.line.oath5.opt2': { zh: '以谋制敌', en: 'Plan ahead' },
  'event.line.oath6.title': { zh: '断舍离', en: 'Hard Choices' },
  'event.line.oath6.desc': { zh: '义与利相冲，需要抉择。', en: 'Honor conflicts with gain.' },
  'event.line.oath6.opt1': { zh: '守义不动', en: 'Stand by honor' },
  'event.line.oath6.opt2': { zh: '权衡取舍', en: 'Weigh the costs' },
  'event.line.oath7.title': { zh: '以义止杀', en: 'End the Bloodshed' },
  'event.line.oath7.desc': { zh: '你以义止杀，江湖或平。', en: 'You seek peace through honor.' },
  'event.line.oath7.opt1': { zh: '止戈为武', en: 'Cease the fight' },
  'event.line.oath7.opt2': { zh: '以德服人', en: 'Lead with virtue' },
  'event.line.oath8.title': { zh: '义旗高举', en: 'Banner of Righteousness' },
  'event.line.oath8.desc': { zh: '义旗高举，群侠云集。', en: 'A banner of righteousness rises.' },
  'event.line.oath8.opt1': { zh: '号召群侠', en: 'Rally the heroes' },
  'event.line.oath8.opt2': { zh: '稳住阵势', en: 'Hold the line' },
  'event.line.oath9.title': { zh: '义薄云天', en: 'Honor Above the Clouds' },
  'event.line.oath9.desc': { zh: '你以情义赢得天下敬仰。', en: 'Your loyalty earns universal respect.' },
  'event.line.oath9.opt1': { zh: '受众人敬', en: 'Accept the honor' },
  'event.line.oath9.opt2': { zh: '行义不言', en: 'Remain humble' },

  'event.line.sect1.title': { zh: '门规切磋', en: 'Rules and Rites' },
  'event.line.sect1.desc': { zh: '各派以礼相试。', en: 'Sects test each other with courtesy.' },
  'event.line.sect1.opt1': { zh: '守礼相答', en: 'Answer with courtesy' },
  'event.line.sect1.opt2': { zh: '以武显势', en: 'Show strength' },
  'event.line.sect2.title': { zh: '联席议事', en: 'Joint Council' },
  'event.line.sect2.desc': { zh: '各派共议江湖大事。', en: 'Sects convene to discuss major affairs.' },
  'event.line.sect2.opt1': { zh: '倡议合议', en: 'Advocate cooperation' },
  'event.line.sect2.opt2': { zh: '主张强硬', en: 'Advocate firmness' },
  'event.line.sect3.title': { zh: '偏师试探', en: 'Probing Force' },
  'event.line.sect3.desc': { zh: '偏师试探你的底细。', en: 'A probing force tests you.' },
  'event.line.sect3.opt1': { zh: '以礼止争', en: 'Calm the dispute' },
  'event.line.sect3.opt2': { zh: '反制出手', en: 'Strike back' },
  'event.line.sect4.title': { zh: '共敌风波', en: 'Common Enemy' },
  'event.line.sect4.desc': { zh: '共同敌人出现，需协力。', en: 'A common enemy emerges.' },
  'event.line.sect4.opt1': { zh: '共御外敌', en: 'Unite forces' },
  'event.line.sect4.opt2': { zh: '保全自身', en: 'Protect your own' },
  'event.line.sect5.title': { zh: '盟约破裂', en: 'Pact Frays' },
  'event.line.sect5.desc': { zh: '盟约将裂，局势紧张。', en: 'The pact frays under tension.' },
  'event.line.sect5.opt1': { zh: '续盟修复', en: 'Repair the pact' },
  'event.line.sect5.opt2': { zh: '各自为战', en: 'Go separate ways' },
  'event.line.sect6.title': { zh: '各派大会', en: 'Grand Congress' },
  'event.line.sect6.desc': { zh: '各派大会召开，话语权在你手中。', en: 'A grand congress convenes; your voice matters.' },
  'event.line.sect6.opt1': { zh: '倡议共治', en: 'Propose shared rule' },
  'event.line.sect6.opt2': { zh: '强势立威', en: 'Establish authority' },
  'event.line.sect7.title': { zh: '一统江湖', en: 'Unified Jianghu' },
  'event.line.sect7.desc': { zh: '江湖终于定于一尊。', en: 'The jianghu is unified at last.' },
  'event.line.sect7.opt1': { zh: '推行法度', en: 'Enforce order' },
  'event.line.sect7.opt2': { zh: '容纳百家', en: 'Embrace diversity' },

  'end.alliance.title': { zh: '群侠同盟', en: 'Alliance of Heroes' },
  'end.alliance.desc': {
    zh: '你统合群侠，江湖共守正道。',
    en: 'You unite heroes to guard the righteous path.'
  },
  'end.vendetta.title': { zh: '宿敌覆灭', en: 'Vendetta Fulfilled' },
  'end.vendetta.desc': {
    zh: '仇敌尽灭，血债终清。',
    en: 'Your vendetta ends; old debts are settled.'
  },
  'end.oath.title': { zh: '义薄云天', en: 'Oath Above the Clouds' },
  'end.oath.desc': {
    zh: '你以情义定江湖，人人敬重。',
    en: 'Your loyalty shapes the jianghu, earning respect.'
  },
  'end.sect.title': { zh: '江湖共主', en: 'Master of the Sects' },
  'end.sect.desc': {
    zh: '你化解纷争，诸派共尊。',
    en: 'You settle disputes and become the shared master.'
  },


  'end.hero.title': { zh: '侠名满天下', en: 'Hero of the Realm' },
  'end.hero.desc': {
    zh: '你扶危济困，侠义为先，众人敬仰。',
    en: 'You aided the weak; your honor is revered across the realm.'
  },
  'end.lord.title': { zh: '权势倾江湖', en: 'Lord of Jianghu' },
  'end.lord.desc': {
    zh: '你权谋老练，势力壮大，群雄俯首。',
    en: 'Through strategy and power, you bend the jianghu to your will.'
  },
  'end.wanderer.title': { zh: '孤影行旅', en: 'Wandering Shadow' },
  'end.wanderer.desc': {
    zh: '你不问江湖纷争，独行天涯。',
    en: 'You shun conflict and wander the world alone.'
  },
  'end.death.title': { zh: '魂归江湖', en: 'Fallen in Jianghu' },
  'end.death.desc': {
    zh: '气血枯竭，命数已尽。江湖仍在，唯你远去。',
    en: 'Your strength fades and your fate ends. The jianghu remains without you.'
  }
} as const

export type I18nKey = keyof typeof i18n

export const t = (key: I18nKey, lang: Lang) => {
  return i18n[key]?.[lang] ?? String(key)
}
