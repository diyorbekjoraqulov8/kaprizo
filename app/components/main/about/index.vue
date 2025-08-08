<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>

<template>
  <section id="about" class="about bg-black px-4">
    <div class="container about_content flex flex-col gap-10 py-20 md:flex-row lg:py-36 lg:gap-20">
      <h2 class="w-full md:w-2/5 text-5xl font-bold inline-block whitespace-nowrap text-[#d3ae42] bg-clip-text text-left z-10">{{ t('about.title') }}</h2>

      <h2 class="text-[#9CA3AF] font-medium text-xl leading-8 mb-6 z-20 relative">{{ t('about.text') }}</h2>
    </div>
  </section>
</template>

<style scoped>
.about {
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    background: url("@/assets/images/gift-box.png") no-repeat center;
    background-size: cover;
    width: 300px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
}
</style>