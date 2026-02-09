<script setup lang="ts">
import { useGameStore } from '../store/gameStore'

const { hudStats } = useGameStore()
</script>

<template>
  <div class="hud">
    <div v-for="item in hudStats" :key="item.key" class="hud-item">
      <div class="text-muted">{{ item.label }}</div>
      <strong>{{ item.value }}</strong>
    </div>
  </div>
</template>
