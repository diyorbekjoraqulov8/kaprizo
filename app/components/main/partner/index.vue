<script setup lang="ts">
import {formatPhone, validatePhone} from "~/composables";

const phoneNumber = ref()
</script>

<template>
  <section id="partner" class="py-16 md:px-16 lg:py-32">
    <div class="container flex gap-4 flex-col lg:flex-row">
      <div class="w-full max-lg:text-center lg:w-1/2">
        <p class="text-3xl text-dark font-bold mb-2">"Kaprizo" bilan hamkorlik</p>
        <p class="text-gray-light text-lg">Raqamingizni qoldiring, siz bilan bog’lanamiz</p>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col gap-6">
        <input
            class="outline-none border focus:border-primary px-5 py-4 rounded-full"
            placeholder="+998(_)"
            v-model="phoneNumber"
            @input="() => phoneNumber = validatePhone(phoneNumber)"
        />

        <SharedButton size="extra-large" type="primary">Yuborish</SharedButton>
      </div>
    </div>
  </section>
</template>

<style scoped></style>