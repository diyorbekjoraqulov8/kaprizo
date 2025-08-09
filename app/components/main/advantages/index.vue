<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>

<template>
  <section id="advantages" class="py-16 lg:py-32">
    <div class="container">
      <h2 class="text-center mb-2 text-gray-700">Nima uchun "Kaprizo" bilan ishlash qulay?</h2>

      <h3 class="text-4xl text-center text-dark font-bold mb-8 lg:mb-12">"Kaprizo"ning afzalliklari</h3>

      <div class="grid grid-cols-1 lg:grid-cols-2 max-sm:text-center">
        <div class="advantages-card">
          <NuxtImg
            src="advantage.png"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">{{ t('advantages.fast_and_easy.title') }}</h6>
            <p class="text-lg text-gray-light">{{ t('advantages.fast_and_easy.text') }}</p>
          </div>
        </div>
        <div class="advantages-card">
          <NuxtImg
            src="advantage.png"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">{{ t('advantages.wide_selection.title') }}</h6>
            <p class="text-lg text-gray-light">{{ t('advantages.wide_selection.text') }}</p>
          </div>
        </div>
        <div class="advantages-card">
          <NuxtImg
            src="advantage.png"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">{{ t('advantages.immediate_delivery.title') }}</h6>
            <p class="text-lg text-gray-light">{{ t('advantages.immediate_delivery.text') }}</p>
          </div>
        </div>
        <div class="advantages-card">
          <NuxtImg
            src="advantage.png"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">{{ t('advantages.for_any_event.title') }}</h6>
            <p class="text-lg text-gray-light">{{ t('advantages.for_any_event.text') }}</p>
          </div>
        </div>
        <div class="advantages-card">
          <NuxtImg
            src="advantage.png"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">{{ t('advantages.secure_payment_system.title') }}</h6>
            <p class="text-lg text-gray-light">{{ t('advantages.secure_payment_system.text') }}</p>
          </div>
        </div>
        <div class="advantages-card">
          <NuxtImg
            src="advantage.png"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">{{ t('advantages.always_your_side.title') }}</h6>
            <p class="text-lg text-gray-light">{{ t('advantages.always_your_side.text') }}</p>
          </div>
        </div>
        <div class="advantages-card">
          <NuxtImg
            src="advantage.png"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">{{ t('advantages.make_loved_happy.title') }}</h6>
            <p class="text-lg text-gray-light">{{ t('advantages.make_loved_happy.text') }}</p>
          </div>
        </div>
        <div class="advantages-card">
          <NuxtImg
            src="advantage.png"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">{{ t('advantages.purchases_saved_history.title') }}</h6>
            <p class="text-lg text-gray-light">{{ t('advantages.purchases_saved_history.text') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantages-card {
  @apply flex flex-col sm:flex-row gap-4 lg:gap-8 items-center py-10 px-0;

  img {
    @apply flex-shrink-0;
  }

  &:first-child,
  &:nth-child(2) {
    @apply pt-4;
  }
  &:last-child,
  &:nth-last-child(2) {
    @apply pb-4;
  }

  &:not(:last-child) {
    @apply border-b border-b-[#f3f4f6];
    &:nth-last-child(2) {
      @apply lg:border-b-0
    }
  }

  &:nth-child(odd) {
    @apply lg:pl-6 lg:pr-8 lg:border-r lg:border-r-[#f3f4f6];
  }
  &:nth-child(even) {
    @apply lg:pl-8 lg:pr-6;
  }
}
</style>