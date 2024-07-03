<template>
  <cinema-list :list="data"/>
</template>

<script setup lang="ts">
import CinemaList from "./components/CinemaList.vue";
import { onMounted, ref, computed } from "vue";
import toMovie from "@/plugins/axios";

const data = ref();

const fetchData = async () => {
  try {
    const res = await toMovie.get("films").then((e) => {
      data.value = e.data.items;
    });
  } catch (e) {
    console.log(e);
  }
};

onMounted(async () => {
  await fetchData();
});
</script>
