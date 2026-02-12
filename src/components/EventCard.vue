<script setup lang="ts">
// 事件展示组件：只负责标题和描述渲染
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
