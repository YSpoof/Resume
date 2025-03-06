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
      Contato
    </h3>
    <div class="space-y-3">
      <a
        :href="`mailto:${userData.contact.email}`"
        class="flex items-center gap-3 text-blue-600 dark:text-stone-300 hover:text-stone-200 transition-colors">
        <Icon name="mdi:email" size="20" />
        <span>{{ userData.contact.email }}</span>
      </a>
      <a
        :href="userData.contact.website"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 text-blue-600 dark:text-stone-300 hover:text-stone-200 transition-colors">
        <Icon name="mdi:web" size="20" />
        <span>Website</span>
      </a>
      <a
        :href="userData.contact.github"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 text-blue-600 dark:text-stone-300 hover:text-stone-200 transition-colors">
        <Icon name="mdi:github" size="20" />
        <span>GitHub</span>
      </a>
      <a
        :href="userData.contact.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 text-blue-600 dark:text-stone-300 hover:text-stone-200 transition-colors">
        <Icon name="mdi:linkedin" size="20" />
        <span>LinkedIn</span>
      </a>
    </div>
  </div>
</template>
