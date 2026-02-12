<script setup lang="ts">
import { computed, watch } from 'vue'
import { useGameStore } from '../store/gameStore'
import { t } from '../data/i18n'
import EventCard from '../components/EventCard.vue'
import OptionButton from '../components/OptionButton.vue'
import HUD from '../components/HUD.vue'

const emit = defineEmits<{ (e: 'end'): void }>()

const store = useGameStore()
// 游戏页：读取当前事件、展示选项，并在结局触发后切到 EndScreen
const { lang, lastSavedAt, currentEvent, chooseOption, setLang, clearSave, dateLabel, locationLabel } =
  store

const eventTitle = computed(() => {
  const event = currentEvent.value
  return event ? t(event.titleKey, lang.value) : '--'
})

const eventDesc = computed(() => {
  const event = currentEvent.value
  return event ? t(event.descKey, lang.value) : '--'
})

const options = computed(() => currentEvent.value?.options ?? [])

watch(
  () => store.state.ended,
  (ended) => {
    if (ended) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 50)
      setTimeout(() => {
        emit('end')
      }, 200)
    }
  }
)
</script>

<template>
  <div class="section-gap">
    <div class="row">
      <span class="badge">
        {{ t('app.date', lang) }} {{ dateLabel }}
      </span>
      <span class="badge">{{ t('app.location', lang) }} {{ locationLabel }}</span>
      <span class="text-muted">{{ t('app.notice.saved', lang) }}: {{ lastSavedAt || '--' }}</span>
    </div>

    <HUD />


    <EventCard :title="eventTitle" :description="eventDesc" />

    <div class="option-list">
      <OptionButton
        v-for="(option, index) in options"
        :key="index"
        :label="t(option.textKey, lang)"
        @click="chooseOption(option)"
      />
    </div>

    <div class="ink-card section-gap" style="padding: 14px;">
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
