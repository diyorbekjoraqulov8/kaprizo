<script setup lang="ts">

const scrollToSmooth = (name) => {
  document.getElementById(name).scrollIntoView({ behavior: 'smooth' });
}

</script>

<template>
  <nav>
    <ul class="flex items-center justify-center gap-5 font-medium text-gray-600">
      <li @click="() => scrollToSmooth('income')" class="cursor-pointer">Asosiy</li>
      <li @click="() => scrollToSmooth('about')" class="cursor-pointer">Tizim haqida</li>
      <li @click="() => scrollToSmooth('advantages')" class="cursor-pointer">Afzalliklar</li>
      <li @click="() => scrollToSmooth('faq')" class="cursor-pointer">Savol-javoblar</li>
    </ul>
  </nav>
</template>

<style scoped>

</style>