<script lang="ts">
  import userData from "$lib/data/myData";
  import Header from "$lib/components/Header.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Education from "$lib/components/Education.svelte";
  import ProgrammingTech from "$lib/components/ProgrammingTech.svelte";
  import WorkExperience from "$lib/components/WorkExperience.svelte";
  import SimplifiedVersion from "$lib/components/SimplifiedVersion.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div
  class="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-stone-500 dark:to-stone-600 p-4 md:p-8">
  <div
    class="max-w-5xl mx-auto bg-white dark:bg-stone-900 rounded-xl shadow-xl overflow-hidden">
    <Header {userData} />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-8">
      <div class="lg:col-span-1 space-y-8">
        <Contact {userData} />
        <Skills {userData} />
        <Education {userData} />
      </div>

      <div class="lg:col-span-2 space-y-8">
        <ProgrammingTech {userData} />
        <WorkExperience {userData} />
      </div>
    </div>

    <SimplifiedVersion line />
    <Footer {userData} />
  </div>
</div>
