<script setup lang="ts">
import { useI18n } from "vue-i18n";
import {scrollToSmooth} from "~/composables";

const {t} = useI18n()
</script>

<template>
  <div id="income" class="income h-[calc(100dvh-100px)]">
    <div class="container h-full flex items-center justify-center lg:justify-between">
      <div class="hidden lg:flex w-1/4"/>
      <div class="w-full lg:w-3/4 text-center relative">
        <p class="income_gift text-9xl">{{ t('income.gift') }}</p>
        <p class="income_two text-6xl md:text-8xl">{{ t('income.text_two') }}</p>
        <p class="income_three text-2xl md:text-4xl">{{ t('income.text_three') }}</p>
        <p class="income_five text-4xl md:text-7xl">{{ t('income.text_four') }}</p>

        <SharedButton
            class="mb-2"
            size="extra-large"
            type="primary"
            @click="() => scrollToSmooth('partner')"
        >
          {{ t('income.install_app') }}
        </SharedButton>

        <div>
          <LazyIconTop class="text-[#d8a654] text-2xl text-center mx-auto"/>

          <p class="income_six">{{ t('income.text_six') }}</p>
          <p class="income_six">{{ t('income.text_six_2') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.income {
  background: url("@/assets/images/income-bg.png") no-repeat center left;
  background-size: cover;
  @media (max-width: 1023px) {
    background: none;
  }

  &_gift {
    font-family: "Great Vibes", sans-serif;
    position: absolute;
    top: -12%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
  &_two {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 500;
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
    line-height: 1.2;
    color: #d8a654;
    word-break: break-all;
    word-wrap: break-word;
    margin: 0 auto;
  }
}
</style>