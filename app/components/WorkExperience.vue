<script setup lang="ts">
import type { MyData } from "~/myData";

defineProps<{
  userData: MyData;
}>();
</script>
<template>
  <div
    class="bg-gradient-to-r dark:from-stone-800 dark:to-stone-700 rounded-lg p-5 shadow-sm border border-cyan-100">
    <h3
      class="text-xl font-semibold text-cyan-700 dark:text-stone-300 mb-4 border-b border-cyan-200 dark:border-stone-200 pb-2">
      Experiência Profissional
    </h3>
    <div class="space-y-6">
      <div
        v-for="job in userData.jobs"
        :key="job.company"
        class="relative pl-6 border-l-2 border-blue-300 dark:border-stone-400">
        <div
          class="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-cyan-500 dark:bg-stone-300"></div>
        <div class="mb-1">
          <div class="flex flex-row justify-between items-center my-4 md:my-2">
            <h4 class="text-pretty font-bold text-gray-800 dark:text-stone-200">
              {{ job.title }}
            </h4>
            <span
              class="text-nowrap text-sm font-medium text-blue-600 dark:text-stone-200 bg-blue-50 dark:bg-stone-600 px-3 py-1 rounded-full">
              {{ job.date }}
            </span>
          </div>
          <h5 class="text-gray-600 dark:text-stone-300 font-medium">
            {{ job.company }}
          </h5>
        </div>
        <p class="text-gray-700 dark:text-stone-400 mt-2 whitespace-pre-line">
          {{ job.description }}
        </p>
      </div>
    </div>
  </div>
</template>
