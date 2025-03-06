<script setup lang="ts">
import type { MyData } from "~/myData";

defineProps<{
  userData: MyData;
}>();
</script>
<template>
  <div class="bg-blue-50 dark:bg-stone-800 rounded-lg p-5 shadow-sm">
    <h3
      class="text-xl font-semibold text-blue-700 dark:text-stone-300 mb-4 border-b border-blue-200 dark:border-stone-200 pb-2">
      Habilidades
    </h3>
    <div class="space-y-4">
      <div v-for="skill in userData.skills" :key="skill.name" class="space-y-1">
        <div class="flex justify-between items-center">
          <span class="font-medium text-gray-800 dark:text-stone-300">
            {{ skill.name }}
          </span>
          <span
            class="text-sm text-blue-600 dark:text-stone-600 bg-blue-100 dark:bg-stone-200 px-2 py-1 rounded-full">
            {{ skill.level }}
          </span>
        </div>
        <p class="text-sm text-gray-600 dark:text-stone-400">
          {{ skill.description }}
        </p>
      </div>
    </div>
  </div>
</template>
