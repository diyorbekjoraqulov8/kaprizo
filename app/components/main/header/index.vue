<script setup lang="ts">

const openSidebar = ref(false);
</script>

<template>
  <header class="pt-[77px]">
    <div class="z-40 border-b fixed w-full top-0 left-0 bg-white">
      <div class="container py-5 flex items-center justify-between">
        <div
          class="md:hidden text-2xl cursor-pointer p-1"
          @click="openSidebar = true"
        >
          <LazyIconMenu class="sm:hidden"/>
        </div>
        <SharedLogo class="hidden md:flex"/>

        <TransitionGroup name="list" tag="ul">
          <MainHeaderNavbarMobile
              v-if="openSidebar"
              @close="openSidebar = false"
              class="sm:hidden"
          />
        </TransitionGroup>



        <MainHeaderNavbar class="hidden sm:block" :is-mobile="false"/>

        <div>
          <SharedLangToggle />
        </div>
      </div>
    </div>

    <MainHeaderIncome />
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