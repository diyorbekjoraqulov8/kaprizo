<script setup lang="ts">

</script>

<template>
  <section id="instructions" class="instructions py-16 lg:py-32 bg-light">
    <div class="container flex max-lg:flex-col-reverse gap-4 justify-between">
      <div class="flex flex-col lg:flex-row items-center gap-6">
        <MainInstructionsSteps />
      </div>
      <LazyNuxtImg
          src="instructions.png"
          alt="Instructions to use app"
          class="instructions-img max-lg:h-[70dvh] lg:w-1/3 max-lg:mx-auto"
      />
    </div>
  </section>
</template>

<style scoped>
.instructions-img {
  transform: translateX(33%);

  @media (max-width: 1024px) {
    transform: translate(0);
  }
}
</style>