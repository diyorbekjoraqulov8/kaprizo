<script setup lang="ts">
import { useI18n } from "vue-i18n";

const {t} = useI18n()
</script>

<template>
  <div id="income" class="container h-[600px] sm:h-[650px] md:h-[850px] py-4 pt-14 flex flex-col items-center text-center">
    <h1 class="text-3xl md:text-5xl font-medium max-w-md leading-[1.10em] mb-4">{{ t('income.title') }}</h1>
    <p class="text-sm text-gray-light md:text-lg max-w-[282px] mb-6">Biz bilan mijozlaringizga muddatli to‘lov imkoniyatini joriy eting</p>

    <SharedButton size="large" type="primary" class="mb-12">Hamkor bo'lish</SharedButton>

    <NuxtImg width="640px" src="https://www.taqsit.uz/images/devices.webp"/>
  </div>
</template>