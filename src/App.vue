<script setup lang="ts">
import { ref } from 'vue'
import StartScreen from './views/StartScreen.vue'
import GameScreen from './views/GameScreen.vue'
import EndScreen from './views/EndScreen.vue'
import { useGameStore } from './store/gameStore'

const store = useGameStore()
const { canContinue } = store
// 顶层仅维护页面路由态（开始/游戏/结局）
const screen = ref<'start' | 'game' | 'end'>('start')

const startNew = () => {
  // 新局会重置状态并立即存档
  store.newGame()
  screen.value = 'game'
}

const continueGame = () => {
  // 继续游戏：按存档状态进入游戏页或结局页
  const loaded = store.loadGame()
  if (!loaded) {
    screen.value = 'start'
    return
  }
  if (store.state.ended) {
    screen.value = 'end'
    return
  }
  screen.value = 'game'
}

const onEnd = () => {
  screen.value = 'end'
}

const restart = () => {
  store.newGame()
  screen.value = 'game'
}
</script>

<template>
  <div class="main-shell fade-in">
    <StartScreen
      v-if="screen === 'start'"
      :can-continue="canContinue"
      @start="startNew"
      @continue="continueGame"
    />
    <GameScreen v-else-if="screen === 'game'" @end="onEnd" />
    <EndScreen v-else @restart="restart" />
  </div>
</template>
