<script setup lang="ts">
import {Virtual, Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const {t} = useI18n()

const modules = [Virtual, Autoplay]

const data = ref([
  {
    title: '',
    image: 'BPK-logo.png'
  }
])
</script>

<template>
  <section id="partners" class="partners py-16 lg:py-32 bg-light">
    <h1 class="text-4xl text-center text-dark font-bold mb-8 lg:mb-12">{{ t('partners.title') }}</h1>

    <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="50"
        :loop="data.length > 3"
        :autoplay="{
             delay: 2500,
             disableOnInteraction: false,
        }"

    >
      <swiper-slide v-for="item in data">
        <div class=" h-36 flex justify-center">
          <LazyNuxtImg
              :src="item.image"
              alt="Instructions to use app"
              class="instructions-img max-lg:h-[70dvh] lg:w-[44%] max-lg:mx-auto"
          />
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped>

</style>