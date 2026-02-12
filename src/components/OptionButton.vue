<script setup lang="ts">
// 选项按钮：向父组件派发 click，不内置业务逻辑
defineProps<{ label: string }>()
const emit = defineEmits<{ (e: 'click'): void }>()
</script>

<template>
  <button class="btn-wood" type="button" @click="emit('click')">
    {{ label }}
  </button>
</template>
