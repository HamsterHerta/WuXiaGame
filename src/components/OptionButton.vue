<script setup lang="ts">
defineProps<{ label: string }>()
const emit = defineEmits<{ (e: 'click'): void }>()
</script>

<template>
  <button class="btn-wood" type="button" @click="emit('click')">
    {{ label }}
  </button>
</template>
