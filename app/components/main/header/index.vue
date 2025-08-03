<script setup lang="ts">
</script>

<template>
  <header class="pt-[77px]">
    <div class="z-50 border-b fixed w-full top-0 left-0 bg-white">
      <div class="container py-5 flex items-center justify-between">
        <div
          class="md:hidden text-2xl cursor-pointer p-1"
        >
          <LazyIconMenu class="sm:hidden"/>
        </div>
        <SharedLogo class="hidden md:flex"/>

        <MainHeaderNavbar class="hidden sm:block"/>

        <div>
          <SharedLangToggle />
        </div>
      </div>
    </div>

    <MainHeaderIncome />
  </header>
</template>

<style scoped>

</style>