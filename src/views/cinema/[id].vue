<template>
  <div v-if="isLoading" class="container mx-auto flex gap-7 items-start">
    <Skeleton width="18rem" height="100%" borderRadius="8px" />
    <div>
      <Skeleton width="60%" height="40px" borderRadius="8px" />
      <Skeleton width="100%" height="20px" borderRadius="8px" class="my-2" />
      <Skeleton width="30%" height="20px" borderRadius="8px" />
      <Skeleton width="100%" height="20px" borderRadius="8px" class="my-2" />
      <Skeleton width="100%" height="20px" borderRadius="8px" />
      <Skeleton width="40%" height="20px" borderRadius="8px" class="my-2" />
      <Skeleton width="40%" height="20px" borderRadius="8px" />
    </div>
  </div>
  <div
    v-else-if="data.coverUrl === null"
    class="container mx-auto flex gap-7 items-start"
  >
    <img v-lazy="data.posterUrlPreview" class="w-72 rounded-lg shadow-lg" />
    <div>
      <h1 class="text-4xl font-bold mb-3">
        {{ data.nameRu || data.nameOriginal }}
      </h1>
      <p class="mb-3">{{ data.description }}</p>
      <p
        :class="data.ratingKinopoisk < 5 ? 'text-red-500' : 'text-green-500'"
        class="text-lg font-semibold"
      >
        Rating: {{ data.ratingKinopoisk }}
      </p>
      <p class="text-gray-600">Year: {{ data.year }}</p>
      <p class="text-gray-600">Genres: {{ genres }}</p>
      <p class="text-gray-600">Country: {{ countries }}</p>
      <a
        :href="data.webUrl"
        target="_blank"
        class="text-blue-500 underline mt-3 block"
        >More details</a
      >
    </div>
  </div>
  <div v-else>
    <img :src="data.coverUrl" class="aspect-video" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { getMovieById } from "@/services";
import Skeleton from "@/components/ui/Skeleton.vue";

const data = ref({});
const isLoading = ref(true);
const route = useRoute();

const genres = computed(
  () => data.value.genres?.map((genre) => genre.genre).join(", ") || ""
);
const countries = computed(
  () => data.value.countries?.map((country) => country.country).join(", ") || ""
);

onMounted(async () => {
  const res = await getMovieById(route.params.id);
  data.value = res.data;
  isLoading.value = false;
});
</script>
