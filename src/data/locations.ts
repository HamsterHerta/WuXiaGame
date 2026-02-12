import type { Location } from './types'

// 地点表：用于 HUD 显示与事件地点约束判定
export const locations: Location[] = [
  { id: 'road', nameKey: 'location.road' },
  { id: 'sect', nameKey: 'location.sect' },
  { id: 'market', nameKey: 'location.market' },
  { id: 'tavern', nameKey: 'location.tavern' },
  { id: 'village', nameKey: 'location.village' },
  { id: 'mountain', nameKey: 'location.mountain' }
]
