<template>
  <div
    v-if="iconLeft.length > 0"
    class="flex items-center wrapper border border-secondary rounded-lg py-2 px-4"
    :class="{ 'ring-2 ring-500': isFocused }"
  >
    <div class="flex items-center justify-center mr-2">
      <i :class="iconLeft"></i>
    </div>
    <input
      :type="type"
      class="border-0 rounded-l-none pl-1 outline-none flex-grow"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
  <input
    v-else
    :type="type"
    class="border border-secondary rounded-lg py-2 outline-none px-4 focus:ring-2 focus:ring-500"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import type { IInputProps } from "@/types";

const props = defineProps<IInputProps>();

const isFocused = ref(false);
</script>
