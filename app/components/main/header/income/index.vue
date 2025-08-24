<script setup lang="ts">
import { useI18n } from "vue-i18n";
const {t} = useI18n()
</script>

<template>
  <div id="income" class="income h-[calc(80dvh-100px)] lg:h-[calc(100dvh-100px)] bg-[#ebd8c5]">
    <div class="container h-full flex items-center justify-center">
      <div class="income_img w-1/6 sm:w-1/3 lg:w-1/2 h-full flex items-center">
        <LazyNuxtImg
            src="gift.png"
            alt="Gift"
            class="flex w-full max-xl:-translate-x-1/2 max-xl:scale-150 max-lg:scale-[2] max-sm:scale-[6] max-sm:-translate-x-full"
        />
      </div>

      <div class="w-5/6 sm:w-1/2 text-center">
        <h2 class="income_gift text-6xl lg:text-7xl">{{ t('income.gift') }}</h2>
        <h2 class="income_gift text-6xl lg:text-7xl">{{ t('income.gift_two') }}</h2>
        <h3 class="income_two text-3xl lg:text-4xl">{{ t('income.text') }}</h3>
        <h3 class="income_two text-3xl lg:text-4xl">{{ t('income.text_two') }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.income {
  &_gift {
    font-family: "Great Vibes", sans-serif;
    color: white;
  }
  &_two {
    font-family: "Bebas Neue", sans-serif;
    text-transform: uppercase;
    z-index: -999 !important;
    line-height: 1;
    color: #d8a654;
    text-align: center;
  }
}
</style>