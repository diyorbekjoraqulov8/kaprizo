<script setup lang="ts">
import { useI18n } from "vue-i18n";
import {scrollToSmooth} from "~/composables";

const {t} = useI18n()

//&::before {
//  content: "";
//  position: absolute;
//  width: 100%;
//  height: 600px;
//  top: 50%;
//  left: -50%;
//  transform: translateY(-50%);
//  background: url("gift.png") no-repeat center center;
//  background-size: contain;
//}
</script>

<template>
  <div id="income" class="income h-[calc(80dvh-100px)] lg:h-[calc(100dvh-100px)]">
    <div class="container h-full flex items-center justify-center">
      <div class="income_img w-1/6 sm:w-1/3 lg:w-1/2 h-full flex items-center">
        <LazyNuxtImg
            src="gift.png"
            alt="Gift"
            class="flex w-full max-xl:-translate-x-1/2 max-xl:scale-150 max-lg:scale-[2] max-sm:scale-[6] max-sm:-translate-x-full"
        />
      </div>

      <div class="w-5/6 sm:w-1/2 text-center">
        <h2 class="income_gift text-7xl lg:text-8xl">{{ t('income.gift') }}</h2>
        <h2 class="income_gift text-7xl lg:text-8xl">{{ t('income.gift_two') }}</h2>
        <h3 class="income_two text-4xl lg:text-5xl">{{ t('income.text') }}</h3>
        <h3 class="income_two text-4xl lg:text-5xl">{{ t('income.text_two') }}</h3>
      </div>
    </div>

<!--    <div class="container h-full flex items-center justify-center lg:justify-between">-->
<!--      <div class="hidden lg:flex w-1/4"/>-->
<!--      <div class="w-full lg:w-3/4 text-center relative">-->
<!--        <p class="income_gift text-9xl">{{ t('income.gift') }}</p>-->
<!--        <p class="income_two text-6xl md:text-8xl">{{ t('income.text_two') }}</p>-->
<!--        <p class="income_three text-2xl md:text-4xl">{{ t('income.text_three') }}</p>-->
<!--        <p class="income_five text-4xl md:text-7xl">{{ t('income.text_four') }}</p>-->

<!--        <SharedButton-->
<!--            class="mb-2"-->
<!--            size="extra-large"-->
<!--            type="primary"-->
<!--            @click="() => scrollToSmooth('partner')"-->
<!--        >-->
<!--          {{ t('income.install_app') }}-->
<!--        </SharedButton>-->

<!--        <div>-->
<!--          <LazyIconTop class="text-[#d8a654] text-2xl text-center mx-auto"/>-->

<!--          <p class="income_six">{{ t('income.text_six') }}</p>-->
<!--          <p class="income_six">{{ t('income.text_six_2') }}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<style scoped>
.income {
  &_img {

  }
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
  &_three {
    font-family: sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    color: white;
    margin-bottom: 4px;
  }
  &_five {
    font-family: "Bebas Neue", sans-serif;
    text-transform: uppercase;
    line-height: 0.9;
    color: #d8a654;
    margin-left: auto;
    margin-right: auto;
    padding: 5px 18px;
    margin-bottom: 8px;
  }
  &_six {
    font-size: 18px;
    font-family: sans-serif;
    line-height: 1.2;
    color: #d8a654;
    word-break: break-all;
    word-wrap: break-word;
    margin: 0 auto;
  }
}
</style>