<script setup lang="ts">
import { Collapse } from 'vue-collapsed'
import {useI18n} from "vue-i18n";

const isExpanded = ref<number>()

const {t} = useI18n()

const list = computed(() => [
  {
    id: 1,
    title: t('faq.question_list.one.question'),
    text: t('faq.question_list.one.answer'),
    open: isExpanded.value === 1
  },
  {
    id: 2,
    title: t('faq.question_list.two.question'),
    text: t('faq.question_list.two.answer'),
    open: isExpanded.value === 2
  },
  {
    id: 3,
    title: t('faq.question_list.three.question'),
    text: t('faq.question_list.three.answer'),
    open: isExpanded.value === 3
  },
  {
    id: 4,
    title: t('faq.question_list.four.question'),
    text: t('faq.question_list.four.answer'),
    open: isExpanded.value === 4
  },
  {
    id: 5,
    title: t('faq.question_list.five.question'),
    text: t('faq.question_list.five.answer'),
    open: isExpanded.value === 5
  },
])

function toggleCollapse(collapseId: number) {
  if (isExpanded.value === collapseId) isExpanded.value = undefined
  else isExpanded.value = collapseId
}
</script>

<template>
  <section id="faq" class="py-16 lg:py-32">
    <div class="container">
      <p class="text-center mb-2 text-gray-700">{{ t('faq.subtitle') }}</p>

      <h3 class="text-4xl text-center text-dark font-bold mb-8 lg:mb-12">{{ t('faq.title') }}</h3>

      <ul class="flex flex-col gap-2">
        <li
          v-for="item in list"
        >
          <div
            class="flex items-center gap-6 border p-6 cursor-pointer rounded-md"
            @click="() => toggleCollapse(item.id)"
          >
            <button class="p-2 bg-light rounded-md text-xl text-primary">
              <IconTop
                :class="[ !item.open && 'rotate-180' ]"
                class="transition-transform"
              />
            </button>

            <p class="text-base">{{ item.title }}</p>
          </div>
          <collapse :when="item.open">
            <p class="px-6 py-2">{{ item.text }}</p>
          </collapse>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>