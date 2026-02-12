# 武侠抉择模拟游戏前端模板

## 项目是什么
这是一个纯前端、数据驱动的武侠叙事抉择游戏模板，基于 `Vue 3 + TypeScript + Vite`。你可以通过编辑事件数据表和文案表来快速搭建自己的江湖故事，不需要改动核心逻辑。

适用场景：
- 叙事选择类游戏原型
- 武侠世界观交互叙事
- 前端游戏数据化模板

## 特性
- 事件驱动（固定事件/条件事件/随机事件）
- 年月日时间系统与事件持续时间
- 地点系统与事件地点约束
- 人物关系（好感/仇恨/情义）按“目标人物/势力”存储
- 存档/读档（localStorage）
- 全前端、可部署到任意静态托管

## 技术栈
- Vue 3
- TypeScript
- Vite

## 快速开始（无 node_modules 的纯前端代码）

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```
浏览器访问终端输出的本地地址。

### 3. 生产构建
```bash
npm run build
```
构建产物在 `dist/`。

### 4. 本地预览生产包
```bash
npm run preview
```

## 自定义与扩展

### 事件系统
事件数据在 `src/data/events.ts`。

事件模板：
```ts
{
  id: 'event_new_xxx',
  titleKey: 'event.new.xxx.title',
  descKey: 'event.new.xxx.desc',
  category: 'conditional', // fixed | conditional | random
  locationId: 'tavern',
  durationDays: 2,
  conditions: [
    { type: 'statMin', stat: 'wisdom', value: 3 },
    { type: 'eventDone', eventId: 'start' }
  ],
  options: [
    {
      textKey: 'event.new.xxx.opt1',
      effects: [{ stat: 'wisdom', delta: 1 }],
      relationTarget: 'li_qing',
      relationEffects: [{ stat: 'favor', delta: 1, target: 'li_qing' }],
      moveTo: 'market'
    }
  ]
}
```

### 固定事件
```ts
{
  category: 'fixed',
  fixedDate: { year: 1, month: 2, day: 10 },
  ...
}
```

### 条件事件
```ts
{
  category: 'conditional',
  conditions: [
    { type: 'locationIs', locationId: 'sect' },
    { type: 'statMin', stat: 'renown', value: 4 }
  ],
  ...
}
```

### 随机事件
```ts
{
  category: 'random',
  random: true,
  randomChance: {
    base: 0.2,
    scale: { luck: 0.02, wisdom: 0.01 }
  },
  conditions: [
    { type: 'locationIs', locationId: 'road' }
  ],
  ...
}
```

### 人物关系系统
关系按目标 ID 保存，不再是“全局江湖人脉”。

写法：
```ts
relationTarget: 'li_qing',
relationEffects: [
  { stat: 'favor', delta: 2, target: 'li_qing' },
  { stat: 'loyalty', delta: 1 }
]
```

条件：
```ts
conditions: [
  { type: 'relMin', stat: 'favor', value: 3, target: 'li_qing' }
]
```

### 地点系统
地点在 `src/data/locations.ts` 与 `src/data/types.ts`。

新增地点步骤：
1. `types.ts` 的 `LocationId` 加新 ID
2. `locations.ts` 新增地点条目
3. `i18n.ts` 新增地点文案

### 时间与事件持续时间
时间逻辑在 `src/store/gameStore.ts`。

事件耗时优先级：
1. `option.durationDays`
2. `option.waitDays`
3. `event.durationDays`
4. `event.waitDays`
5. 默认 `1`

## 打包与发布

构建命令：
```bash
npm run build
```

`dist/` 为静态资源目录，可直接发布到：
- GitHub Pages
- Vercel
- Netlify
- 自有 Nginx 静态站点

## 清理与规范

建议 `.gitignore` 保持：
```
node_modules
/dist
*.tsbuildinfo
.DS_Store
vite.config.js
vite.config.d.ts
```

如果仓库中已存在这些文件，建议删除后再提交。

## 许可证
本项目采用 [MIT 许可证](LICENSE) 发布。

## 详细架构
见 `项目架构说明.md`。
