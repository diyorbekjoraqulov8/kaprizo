<script setup lang="ts">

</script>

<template>
  <footer class="py-14 lg:py-28 bg-gray px-6 lg:px-0">
    <div class="container flex flex-col lg:flex-row gap-12">
      <div class="lg:w-3/5 flex flex-col gap-8">
        <SharedLogo theme="light"/>

        <p class="text-muted">Biznes uchun zamonaviy raqamlashtirilgan texnologik yechimlar</p>

        <div class="text-muted text-lg flex gap-6">
          <router-link to="/">
            <LazyIconFacebook />
          </router-link>
          <router-link to="/">
            <LazyIconInstagram/>
          </router-link>
        </div>
      </div>
      <ul class="lg:w-1/5 flex flex-col gap-4 text-muted text-base">
        <li>Tizim haqida</li>
        <li>Afzalliklar</li>
        <li>Savol-javoblar</li>
        <li>App Storedan yuklash</li>
        <li>Play Marketdan yuklash</li>
      </ul>
      <ul class="lg:w-1/5 flex flex-col gap-4 text-muted text-base">
        <li class="flex gap-2">
          <LazyIconMail class="flex-shrink text-xl text-gray-400"/>
          <p class="leading-5">info@taqsit.uz</p>
        </li>
        <li class="flex gap-2">
          <LazyIconPhone class="text-xl text-gray-400"/>
          <p class="leading-5">+998 99 877 51 84</p>
        </li>
        <li class="flex gap-2">
          <LazyIconMarker class="flex-shrink-0 text-xl text-gray-400"/>
          <p class="leading-5">Toshkent shahri, Mirzo Ulug‘bek tumani, Darxon ko’chasi, 1-proyezd, 7-uy</p>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped></style>