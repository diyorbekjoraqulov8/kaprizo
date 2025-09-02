<script setup lang="ts">
import {scrollToSmooth} from "~/composables";
import {useRoute, useRouter} from "vue-router";
import {useI18n} from "vue-i18n";

interface IProps {
  isMobile: boolean;
}

type TPageIds = 'income' | 'about' | 'advantages' | 'faq' | 'instructions'

const props = defineProps<IProps>()

const emits = defineEmits(['select'])

const { t } = useI18n()

const route = useRoute()
const router = useRouter()
const localePath = useLocalePath();

function clickPage(name: TPageIds) {
  if (!String(route.name)?.startsWith('index')) {
    router.push(localePath('/'))
        .then(() => {
          nextTick(() => {
            scrollToSmooth(name)
          })
        })
  } else {
    scrollToSmooth(name)
  }

  props.isMobile && emits('select', name)
}
</script>

<template>
  <nav>
    <ul
        class="navbar-list flex items-center justify-center font-medium text-gray-600"
        :class="[isMobile ? '!flex-col !items-start pl-2' : 'gap-7']"
    >
      <li @click="() => clickPage('income')" class="nav-item" :class="[isMobile && 'px-2 pt-2 pb-3 w-full']">{{ t('menu.main') }}</li>
      <li @click="() => clickPage('about')" class="nav-item" :class="[isMobile && 'px-2 pt-2 pb-3 w-full']">{{ t('menu.about_app') }}</li>
      <li @click="() => clickPage('advantages')" class="nav-item" :class="[isMobile && 'px-2 pt-2 pb-3 w-full']">{{ t('menu.advantages') }}</li>
      <li @click="() => clickPage('instructions')" class="nav-item" :class="[isMobile && 'px-2 pt-2 pb-3 w-full']">{{ t('menu.rules') }}</li>
      <li @click="() => clickPage('faq')" class="nav-item" :class="[isMobile && 'px-2 pt-2 pb-3 w-full']">{{ t('menu.faq') }}</li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-item {
  @apply cursor-pointer rounded text-gray-light hover:text-black text-base;
}
</style>