<script setup lang="ts">
// .instructions-step {
//   border: 1px solid red;
// &:deep(&_item:not(:last-child)) {
//   .instructions-step_item-number {
//       position: relative;
//     &:after {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 50%;
//         transform: translateX(-50%);
//         width: 3px;
//         height: 100%;
//         background-color: var(--muted);
//       }
//     }
//   }
// }

import {useI18n} from "vue-i18n";

const {t} = useI18n()


const list = computed(() => [
  {
    title: t('instructions.select_app.title'),
    text: t('instructions.select_app.text'),
  },
  {
    title: t('instructions.register_app.title'),
    text: t('instructions.register_app.text'),
  },
  {
    title: t('instructions.open_app.title'),
    text: t('instructions.open_app.text'),
  },
  {
    title: t('instructions.delivered_voucher.title'),
    text: t('instructions.delivered_voucher.text'),
  },
])
</script>

<template>
  <div class="instructions-step w-full lg:w-2/3 flex flex-col">
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