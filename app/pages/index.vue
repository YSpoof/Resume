<script setup>
import userData from "~/myData";
</script>
<template>
  <div
    class="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-stone-500 dark:to-stone-600 p-4 md:p-8">
    <div
      class="max-w-5xl mx-auto bg-white dark:bg-stone-900 rounded-xl shadow-xl overflow-hidden">
      <!-- Header Section -->
      <Header :userData="userData" />

      <!-- Content Wrapper -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-8">
        <!-- Left Column -->
        <div class="lg:col-span-1 space-y-8">
          <!-- Contact Info -->
          <Contact :userData="userData" />

          <!-- Skills -->
          <Skills :userData="userData" />

          <!-- Education -->
          <Education :userData="userData" />
        </div>

        <!-- Right Column -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Programming Tech -->
          <ProgrammingTech :userData="userData" />

          <!-- Work Experience -->
          <WorkExperience :userData="userData" />
        </div>
      </div>

      <!-- Footer -->
      <SimplifiedVersion :line="true" />
      <Footer :userData="userData" />
    </div>
  </div>
</template>
