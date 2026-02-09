<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../store/gameStore'
import { t } from '../data/i18n'

defineEmits<{ (e: 'restart'): void }>()

const store = useGameStore()
const { lang, getEnding, setLang, clearSave } = store

const endingTitle = computed(() => {
  const ending = getEnding.value
  return ending ? t(ending.titleKey, lang.value) : t('app.end.title', lang.value)
})

const endingDesc = computed(() => {
  const ending = getEnding.value
  return ending ? t(ending.descKey, lang.value) : ''
})
</script>

<template>
  <div class="section-gap">
    <div class="ink-card section-gap" style="padding: 22px;">
      <h1 class="screen-title ink-title">{{ endingTitle }}</h1>
      <div class="end-banner">
        <p class="event-desc">{{ endingDesc }}</p>
      </div>
      <button class="btn-seal" type="button" @click="$emit('restart')">
        {{ t('app.end.restart', lang) }}
      </button>
    </div>
    <div class="ink-card section-gap" style="padding: 18px;">
      <div class="row">
        <strong>{{ t('app.settings', lang) }}</strong>
        <div class="lang-switch">
          <button
            class="btn-ghost"
            type="button"
            :aria-pressed="lang === 'zh'"
            @click="setLang('zh')"
          >
            {{ t('app.lang.zh', lang) }}
          </button>
          <button
            class="btn-ghost"
            type="button"
            :aria-pressed="lang === 'en'"
            @click="setLang('en')"
          >
            {{ t('app.lang.en', lang) }}
          </button>
        </div>
      </div>
      <button class="btn-ghost" type="button" @click="clearSave()">
        {{ t('app.reset', lang) }}
      </button>
    </div>
  </div>
</template>
