<script lang="ts">
  import type { MyData } from "$lib/data/myData";

  type Props = {
    userData: MyData;
  };

  let { userData }: Props = $props();

  const year = new Date().getFullYear();
</script>

<div
  class="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-stone-800 dark:to-stone-700 dark:text-stone-300 text-white p-4 text-center">
  <p>© {year} - {userData.name}</p>
</div>
