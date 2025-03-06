<script setup lang="ts">
import type { MyData } from "~/myData";

defineProps<{
  userData: MyData;
}>();
</script>

<template>
  <div
    class="bg-gradient-to-r from-blue-100/60 to-cyan-100/60 dark:from-stone-800 dark:to-stone-700 rounded-lg p-5 shadow-sm">
    <h3
      class="text-xl font-semibold text-blue-700 dark:text-stone-300 mb-4 border-b border-blue-200 dark:border-stone-200 pb-2">
      Tecnologias
    </h3>
    <div class="grid grid-cols-3 gap-4">
      <a
        v-for="skill in userData.programmingTech"
        :key="skill.name"
        :href="skill.link"
        target="_blank"
        rel="noopener noreferrer"
        :class="`flex flex-col items-center gap-2 p-4 rounded-lg bg-white dark:bg-stone-200 hover:bg-opacity-80 transition-all hover:-translate-y-1 ${skill.glowColor} hover:shadow-md`">
        <Icon :name="skill.icon" size="32" />
        <span class="text-xs md:text-base font-medium text-gray-800">
          {{ skill.name }}
        </span>
      </a>
    </div>
  </div>
</template>
