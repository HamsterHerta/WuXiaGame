<script setup lang="ts">
defineProps<{ title: string; description: string }>()
</script>

<template>
  <div class="ink-card section-gap" style="padding: 18px;">
    <div>
      <h2 class="event-title ink-title">{{ title }}</h2>
      <p class="event-desc">{{ description }}</p>
    </div>
    <div class="ink-mark"></div>
  </div>
</template>
