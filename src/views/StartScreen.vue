<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../store/gameStore'
import { t } from '../data/i18n'

defineProps<{ canContinue: boolean }>()

const emit = defineEmits<{
  (e: 'start'): void
  (e: 'continue'): void
}>()

// 开始页仅负责新开局、继续、语言切换与清档入口
const { lang, lastSavedAt, setLang, clearSave } = useGameStore()

const title = computed(() => t('app.title', lang.value))
const subtitle = computed(() => t('app.subtitle', lang.value))
</script>

<template>
  <div class="section-gap">
    <div class="ink-card section-gap" style="padding: 28px;">
      <h1 class="screen-title ink-title">{{ title }}</h1>
      <p class="screen-subtitle">{{ subtitle }}</p>
      <div class="divider"></div>
      <div class="section-gap">
        <button class="btn-seal" type="button" @click="emit('start')">
          {{ t('app.start', lang) }}
        </button>
        <button
          v-if="canContinue"
          class="btn-wood"
          type="button"
          @click="emit('continue')"
        >
          {{ t('app.continue', lang) }}
        </button>
        <span v-else class="text-muted">{{ t('app.notice.nosave', lang) }}</span>
      </div>
    </div>

    <div class="ink-card section-gap" style="padding: 18px;">
      <div class="row">
        <div>
          <strong>{{ t('app.settings', lang) }}</strong>
          <div class="text-muted">{{ t('app.notice.saved', lang) }}: {{ lastSavedAt || '--' }}</div>
        </div>
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
