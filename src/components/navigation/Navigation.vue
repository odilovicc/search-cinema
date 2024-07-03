<template>
  <div class="py-5">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold">
          Search<span class="text-secondary">Cinema</span>
        </router-link>
        <form-input
          v-model="searchPrompt"
          icon-left="pi pi-search"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const searchPrompt = ref("");
</script>

<style scoped></style>
