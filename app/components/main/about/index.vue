<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>

<template>
  <section id="about" class="about bg-black px-4 h-[60dvh]">
    <div class="container about_content h-full flex gap-10 lg:gap-20 relative">
      <div class="flex-shrink-0 w-0 sm:w-1/6 lg:w-1/4">
        <LazyNuxtImg
            src="gift-box.png"
            alt="Gift"
            class="h-full max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:-translate-x-1/2 max-sm:-translate-x-3/4"
        />
      </div>

      <div class="flex flex-col justify-center gap-4">
        <h2 class="w-full md:w-2/5 text-4xl sm:text-5xl font-bold whitespace-nowrap text-[#d3ae42] text-left">{{ t('about.title') }}</h2>

        <h2 class="text-[#9CA3AF] font-medium text-base sm:text-xl leading-8 mb-6 z-20 relative">{{ t('about.text') }}</h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>