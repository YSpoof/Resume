<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";

  type Props = {
    line?: boolean;
  };

  let { line = false }: Props = $props();
</script>

{#if line}
  <a
    href="/cv-luis-silva.pdf"
    class="text-blue-600 dark:text-blue-300 font-semibold hover:underline rounded-sm flex md:hidden items-center gap-2 justify-self-center mb-4"
    download>
    <Icon
      icon="mdi:file-pdf-box"
      size={20}
      class="text-blue-600 dark:text-blue-300 self-baseline" />
    Versão simplificada
  </a>
{:else}
  <div class="hidden md:flex flex-col items-center gap-2 text-sm md:text-base">
    <p class="text-center">
      <a
        href="/cv-luis-silva.pdf"
        class="text-stone-100 dark:text-blue-300 font-semibold hover:underline rounded-sm flex flex-col"
        download>
        <Icon
          icon="mdi:file-pdf-box"
          size={100}
          class="text-stone-100 dark:text-blue-300 mx-auto" />
        Versão simplificada
      </a>
    </p>
  </div>
{/if}
