<script lang="ts">
  import type { MyData } from "$lib/data/myData";
  import Icon from "$lib/components/Icon.svelte";

  type Props = {
    userData: MyData;
  };

  let { userData }: Props = $props();
</script>

<div
  class="bg-gradient-to-r from-blue-100/60 to-cyan-100/60 dark:from-stone-800 dark:to-stone-700 rounded-lg p-5 shadow-sm">
  <h3
    class="text-xl font-semibold text-blue-700 dark:text-stone-300 mb-4 border-b border-blue-200 dark:border-stone-200 pb-2">
    Tecnologias
  </h3>
  <div class="grid grid-cols-2 md:grid-cols-5 gap-2">
    {#each userData.programmingTech as skill (skill.name)}
      <a
        href={skill.link}
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-col items-center p-2 rounded-lg bg-white dark:bg-stone-200 hover:bg-opacity-80 transition-all hover:-translate-y-1 {skill.glowColor} hover:shadow-md">
        <Icon icon={skill.icon} size={32} />
        <span class="mt-1 text-xs md:text-base font-medium text-gray-800">
          {skill.name}
        </span>
      </a>
    {/each}
  </div>
</div>
