<template>
  <div
    :class="skeletonClasses"
    :style="{
      width: width,
      height: height,
      borderRadius: borderRadius,
    }"
  ></div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

export default defineComponent({
  name: "Skeleton",
  props: {
    width: {
      type: String as PropType<string>,
      required: true,
    },
    height: {
      type: String as PropType<string>,
      required: true,
    },
    borderRadius: {
      type: String as PropType<string>,
      required: false,
      default: "4px",
    },
  },
  setup() {
    const skeletonClasses = computed(() => [
      "bg-gray-300",
      "animate-pulse",
      "relative",
      "overflow-hidden",
      "skeleton-loading-before",
    ]);

    return { skeletonClasses };
  },
});
</script>

<style>
@keyframes skeleton-loading {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-skeleton-loading {
  animation: skeleton-loading 1.5s infinite;
}

.skeleton-loading-before::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent, white, transparent);
  animation: skeleton-loading 1.5s infinite;
}
</style>
