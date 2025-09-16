<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n();
</script>

<template>
  <footer class="py-14 lg:py-28 bg-gray px-6 lg:px-0">
    <div class="container flex flex-col lg:flex-row gap-12">
      <div class="lg:w-3/5 flex flex-col gap-8">
        <SharedLogo theme="dark"/>

        <p class="text-muted">{{ t('footer.description') }}</p>

        <div class="text-muted text-3xl flex gap-4">
          <router-link to="/">
            <LazyIconTelegram/>
          </router-link>
          <router-link to="/">
            <LazyIconInstagram/>
          </router-link>
        </div>
      </div>
      <div class="lg:w-1/5 text-muted text-base">
        <div class="flex flex-col gap-2">
          <a class="flex w-max">
            <LazyIconPlayMarket class="text-5xl"/>
          </a>
          <a class="flex w-max">
            <LazyIconAppStore class="text-5xl"/>
          </a>
        </div>
      </div>
      <ul class="lg:w-1/5 flex flex-col gap-4 text-muted text-base">
        <li class="flex gap-2">
          <LazyIconMail class="flex-shrink text-xl text-gray-400"/>
          <p class="leading-5">info@kaprizo.uz</p>
        </li>
        <li class="flex gap-2">
          <LazyIconPhone class="text-xl text-gray-400"/>
          <a href="tel:+998999934908">+998 99 993 49 08</a>
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