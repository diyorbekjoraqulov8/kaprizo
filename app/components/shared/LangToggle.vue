<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useI18n } from "vue-i18n";

const target = useTemplateRef<HTMLElement>('target')

const { locale, t } = useI18n()

onClickOutside(target, (event: MouseEvent) => {
  const parentElement = event.target?.closest('.lang-toggle-button');

  if (!(parentElement || event.target?.classList && event.target?.classList?.includes?.('lang-toggle-button'))) closeLangDropdown()
})

const isOpenLangDropdown = ref(false)

function toggleLangDropdown() {
  isOpenLangDropdown.value = !isOpenLangDropdown.value
}
function closeLangDropdown() {
  isOpenLangDropdown.value = false
}
</script>

<template>
  <div class="relative">
    <LazySharedButton
        :outline="true"
        class="lang-toggle-button flex gap-1.5 items-center text-primary"
        @click.stop.prevent="toggleLangDropdown"
    >
      <LazyIconEarth class="text-xl"/>
      <span class="text-sm leading-3">{{ t(`lang.${locale}`) }}</span>
    </LazySharedButton>

    <TransitionGroup name="lang-toggle" tag="ul" class="relative text-primary">
      <div ref="target" v-if="isOpenLangDropdown" class="flex flex-col absolute top-full -left-1/2 w-28 shadow bg-white rounded-md transition-all">
        <switch-locale-path-link
            locale="uz"
            class="flex items-center gap-2 text-sm hover:bg-light px-3 py-1.5"
            @click="closeLangDropdown"
        >
          <LazyIconEarth class="text-xl flex-shrink-0"/>
          O’zbekcha
        </switch-locale-path-link>
        <switch-locale-path-link
            locale="ru"
            class="flex items-center gap-2 text-sm hover:bg-light px-3 py-1.5"
            @click="closeLangDropdown"
        >
          <LazyIconEarth class="text-xl flex-shrink-0"/>
          Русский
        </switch-locale-path-link>
        <switch-locale-path-link
            locale="en"
            class="flex items-center gap-2 text-sm hover:bg-light px-3 py-1.5"
            @click="closeLangDropdown"
        >
          <LazyIconEarth class="text-xl"/>
          English
        </switch-locale-path-link>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.lang-toggle-enter-active,
.lang-toggle-leave-active {
  transition: all 0.3s ease;
}
.lang-toggle-enter-from,
.lang-toggle-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>