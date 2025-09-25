<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()


const list = computed(() => [
  {
    title: t('instructions.download_app.title'),
    text: t('instructions.download_app.text'),
  },
  {
    title: t('instructions.register_app.title'),
    text: t('instructions.register_app.text'),
  },
  {
    title: t('instructions.select_app.title'),
    text: t('instructions.select_app.text'),
  },
  {
    title: t('instructions.payment.title'),
    text: t('instructions.payment.text'),
  },
  {
    title: t('instructions.delivered_voucher.title'),
    text: t('instructions.delivered_voucher.text'),
  },
])
</script>

<template>
  <div class="instructions-step w-full flex flex-col gap-6">
    <MainInstructionsStepsItem
        v-for="(item, index) in list"
        :ke="index"
        :index="(index + 1)"
        :title="item.title"
        :text="item.text"
    />
  </div>
</template>

<style scoped>

</style>