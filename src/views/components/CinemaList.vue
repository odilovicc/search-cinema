<template>
  <div class="flex flex-wrap gap-4 justify-center">
    <card
      v-for="item in list"
      :key="item.kinopoiskId"
      :poster="item.posterUrl"
      :title="item.nameRu || item.nameOriginal"
      @click:button="
        router.push({ name: 'cinema-id', params: { id: item.kinopoiskId } })
      "
      class="w-full md:w-1/5"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { imageDB } from "@/constants";

const router = useRouter();
const props = defineProps<{
  list: Object;
}>();
</script>
