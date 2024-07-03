<template>
  <button
    :class="[
      'px-4 py-1.5 text-white border-transparent transition-all duration-200 rounded-xl bg-primary border-2 hover:bg-transparent hover:border-primary hover:text-primary',
      className,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">

defineProps<{
  className?: string
}>()
</script>
