<script setup lang="ts">

</script>

<template>
  <section id="advantages" class="py-16 lg:py-32">
    <div class="container">
      <p class="text-center mb-2 text-gray-700">Nima uchun "Taqsit" bilan ishlash qulay?</p>

      <h3 class="text-4xl text-center text-dark font-bold mb-8 lg:mb-12">"Taqsit"ning afzalliklari</h3>

      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="advantages-card">
          <NuxtImg
            src="https://www.taqsit.uz/_next/image?url=%2Fimages%2Ffeatures%2Fcustomer.png&w=128&q=75"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">Mijozga yo'naltirilgan yondashuv</h6>
            <p class="text-lg text-gray-light">"Taqsit"da biz har bir biznes noyob ekanligini tushunamiz va biznes ehtiyojlaringizni qadrlaymiz.</p>
          </div>
        </div>
        <div class="advantages-card">
          <NuxtImg
            src="https://www.taqsit.uz/_next/image?url=%2Fimages%2Ffeatures%2Fcustomer.png&w=128&q=75"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">Mijozga yo'naltirilgan yondashuv</h6>
            <p class="text-lg text-gray-light">"Taqsit"da biz har bir biznes noyob ekanligini tushunamiz va biznes ehtiyojlaringizni qadrlaymiz.</p>
          </div>
        </div>
        <div class="advantages-card">
          <NuxtImg
            src="https://www.taqsit.uz/_next/image?url=%2Fimages%2Ffeatures%2Fcustomer.png&w=128&q=75"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">Mijozga yo'naltirilgan yondashuv</h6>
            <p class="text-lg text-gray-light">"Taqsit"da biz har bir biznes noyob ekanligini tushunamiz va biznes ehtiyojlaringizni qadrlaymiz.</p>
          </div>
        </div>
        <div class="advantages-card">
          <NuxtImg
            src="https://www.taqsit.uz/_next/image?url=%2Fimages%2Ffeatures%2Fcustomer.png&w=128&q=75"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">Mijozga yo'naltirilgan yondashuv</h6>
            <p class="text-lg text-gray-light">"Taqsit"da biz har bir biznes noyob ekanligini tushunamiz va biznes ehtiyojlaringizni qadrlaymiz.</p>
          </div>
        </div>
        <div class="advantages-card">
          <NuxtImg
            src="https://www.taqsit.uz/_next/image?url=%2Fimages%2Ffeatures%2Fcustomer.png&w=128&q=75"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">Mijozga yo'naltirilgan yondashuv</h6>
            <p class="text-lg text-gray-light">"Taqsit"da biz har bir biznes noyob ekanligini tushunamiz va biznes ehtiyojlaringizni qadrlaymiz.</p>
          </div>
        </div>
        <div class="advantages-card">
          <NuxtImg
            src="https://www.taqsit.uz/_next/image?url=%2Fimages%2Ffeatures%2Fcustomer.png&w=128&q=75"
            :width="120"
            :height="120"
          />
          <div>
            <h6 class="text-2xl font-semibold mb-2">Mijozga yo'naltirilgan yondashuv</h6>
            <p class="text-lg text-gray-light">"Taqsit"da biz har bir biznes noyob ekanligini tushunamiz va biznes ehtiyojlaringizni qadrlaymiz.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantages-card {
  @apply flex flex-col sm:flex-row gap-4 lg:gap-8 items-center py-10 px-0;

  img {
    @apply flex-shrink-0;
  }

  &:first-child,
  &:nth-child(2) {
    @apply pt-4;
  }
  &:last-child,
  &:nth-last-child(2) {
    @apply pb-4;
  }

  &:not(:last-child) {
    @apply border-b border-b-[#f3f4f6];
    &:nth-last-child(2) {
      @apply lg:border-b-0
    }
  }

  &:nth-child(odd) {
    @apply lg:pl-6 lg:pr-8 lg:border-r lg:border-r-[#f3f4f6];
  }
  &:nth-child(even) {
    @apply lg:pl-8 lg:pr-6;
  }
}
</style>