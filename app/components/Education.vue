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
      Formação
    </h3>
    <div class="space-y-4">
      <div v-for="edu in userData.education" :key="edu.name">
        <h4 class="font-medium text-gray-800 dark:text-stone-300">
          {{ edu.name }}
        </h4>
        <div class="flex justify-between text-sm mt-1">
          <span class="text-gray-600 dark:text-stone-400">
            {{ edu.location }}
          </span>
          <span class="text-blue-600 dark:text-stone-400">
            {{ edu.date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
