<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>

<template>
  <section id="instructions" class="instructions py-16 lg:py-32 bg-light max-w-full">
    <h1 class="text-4xl text-center text-dark font-bold mb-8 lg:mb-12">{{ t('instructions.title') }}</h1>

    <div class="container flex max-lg:flex-col-reverse gap-4 justify-between">
      <div class="flex flex-col lg:flex-row items-center gap-6">
        <MainInstructionsSteps/>
      </div>
      <LazyNuxtImg
          src="instructions.png"
          alt="Instructions to use app"
          class="instructions-img !w-5/12 max-w-full  max-lg:mx-auto"
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