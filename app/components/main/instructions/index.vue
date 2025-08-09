<script setup lang="ts">

</script>

<template>
  <section id="faq" class="faq py-16 lg:py-32 bg-light">
    <div class="container flex max-sm:flex-col-reverse gap-4 justify-between">
      <div class="flex flex-col lg:flex-row items-center gap-6">
        <MainInstructionsSteps />
      </div>
      <LazyNuxtImg
          src="instructions.png"
          alt="Instructions to use app"
          class="faq-img w-1/2 sm:w-1/3 max-sm:mx-auto"
      />
    </div>
  </section>
</template>

<style scoped>
.faq-img {
  transform: translateX(33%);

  @media (max-width: 1024px) {
    transform: translate(0);
  }
}
</style>