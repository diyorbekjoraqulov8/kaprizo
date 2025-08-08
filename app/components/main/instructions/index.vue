<script setup lang="ts">

</script>

<template>
  <section id="faq" class="py-16 lg:py-32 bg-light">
    <div class="container flex flex-col lg:flex-row items-center gap-6">
      <LazyNuxtImg
          src="instructions.png"
          alt="Instructions to use app"
          class="w-2/3 lg:w-1/3"
      />

      <MainInstructionsSteps />
    </div>
  </section>
</template>

<style scoped></style>