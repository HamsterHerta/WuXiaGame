<script setup lang="ts">
import { useGameStore } from '../store/gameStore'
import { t } from '../data/i18n'

const { relationStats, lang } = useGameStore()
</script>

<template>
  <div class="ink-card section-gap" style="padding: 14px;">
    <div class="row">
      <strong class="ink-title">{{ t('app.relation.title', lang) }}</strong>
      <span class="badge">{{ t('app.relation.subtitle', lang) }}</span>
    </div>
    <div class="hud">
      <div v-for="item in relationStats" :key="item.key" class="hud-item">
        <div class="text-muted">{{ item.label }}</div>
        <strong>{{ item.value }}</strong>
      </div>
    </div>
  </div>
</template>
