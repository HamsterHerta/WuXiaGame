<script setup lang="ts">
import { ref } from 'vue'
import StartScreen from './views/StartScreen.vue'
import GameScreen from './views/GameScreen.vue'
import EndScreen from './views/EndScreen.vue'
import { useGameStore } from './store/gameStore'

const store = useGameStore()
const { canContinue } = store
const screen = ref<'start' | 'game' | 'end'>('start')

const startNew = () => {
  store.newGame()
  screen.value = 'game'
}

const continueGame = () => {
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
