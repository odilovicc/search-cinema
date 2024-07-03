<template>
  <div
    class="card flex flex-col rounded-xl h-max min-h-[10rem] relative hover:cursor-pointer transition-transform duration-300 overflow-hidden"
  >
    <img v-lazy ="poster" class="rounded-xl" />
    <div
      class="info-overlay absolute bottom-0 left-0 w-full rounded-xl p-5 flex flex-col justify-between transition-transform duration-300"
    >
      <h1 class="text-2xl font-semibold text-white">{{ title }}</h1>
      <Button class-name="font-bold" @click="$emit('click:button')">Details</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  poster: string;
  title: string;
}>();
</script>

<style scoped>
.info-overlay {
  background: rgba(0, 0, 0, 0.5);
  height: 100%; /* Adjust this height to your needs */
  transform: translateY(100%);
}

.card:hover .info-overlay {
  transform: translateY(0);
}
</style>
