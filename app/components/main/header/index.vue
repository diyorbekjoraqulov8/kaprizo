<script setup lang="ts">
import {useI18n} from "vue-i18n";
const localePath = useLocalePath();

const openSidebar = ref(false);

const {t} = useI18n();
</script>

<template>
  <header class="pt-[100px] bg-[#ebd8c5]">
    <div class="z-40 fixed w-full top-0 left-0 backdrop-blur bg-opacity-90">
      <div class="container py-5 flex items-center justify-between">
        <div
          class="md:hidden text-2xl cursor-pointer p-1"
          @click="openSidebar = true"
        >
          <LazyIconMenu class="sm:hidden"/>
        </div>
        <SharedLogo class="hidden md:flex" theme="light"/>

        <TransitionGroup name="list" tag="ul">
          <MainHeaderNavbarMobile
              v-if="openSidebar"
              @close="openSidebar = false"
              class="sm:hidden"
          />
        </TransitionGroup>

        <MainHeaderNavbar class="hidden sm:block" :is-mobile="false"/>

        <div class="flex items-center gap-4">
          <SharedButton :to="localePath('/voucher-status')" type="primary" class="flex items-center gap-2">
            {{ t('check_voucher') }}
            <LazyIconSearch class="text-base"/>
          </SharedButton>

          <SharedLangToggle />
        </div>
      </div>
    </div>

  </header>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  transform: translateX(-100%);
}
</style>