<script setup lang="ts">
import {scrollToSmooth} from "~/composables";

interface IProps {
  isMobile: boolean;
}

type TPageIds = 'income' | 'about' | 'advantages' | 'faq'

const props = defineProps<IProps>()

const emits = defineEmits(['select'])

function clickPage(name: TPageIds) {
  scrollToSmooth(name)

  props.isMobile && emits('select', name)
}
</script>

<template>
  <nav>
    <ul
        class="navbar-list flex items-center justify-center font-medium text-gray-600"
        :class="[isMobile ? '!flex-col !items-start pl-2' : 'gap-7']"
    >
      <li @click="() => clickPage('income')" class="nav-item" :class="[isMobile && 'px-2 pt-2 pb-3 w-full']">Asosiy</li>
      <li @click="() => clickPage('about')" class="nav-item" :class="[isMobile && 'px-2 pt-2 pb-3 w-full']">Tizim haqida</li>
      <li @click="() => clickPage('advantages')" class="nav-item" :class="[isMobile && 'px-2 pt-2 pb-3 w-full']">Afzalliklar</li>
      <li @click="() => clickPage('faq')" class="nav-item" :class="[isMobile && 'px-2 pt-2 pb-3 w-full']">Savol-javoblar</li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-item {
  @apply cursor-pointer rounded text-gray-light hover:text-black text-base;
}
</style>