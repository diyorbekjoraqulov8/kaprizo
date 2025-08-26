<script setup lang="ts">
import {useDebounceFn} from '@vueuse/core'
import {useI18n} from "vue-i18n";

const searchValue = ref(null)
const errorMessage = ref()
const verifyVoucher = ref()
const loading = ref(false)

const { locale } = useI18n()

const searchVoucherVerify = useDebounceFn(async (value: string | null) => {
  try {
    loading.value = true
    verifyVoucher.value = await $fetch('https://voucher.khamraev.uz/api/vouchers/verify/', {
      method: "POST",
      body: {redeem_code: value},
      // body: { redeem_code: "0066-00038R" },
      headers: {
        'Accept-Language': locale.value
      }
    })
    errorMessage.value = undefined
    if (verifyVoucher.value?.status === 'invalid') errorMessage.value = verifyVoucher.value?.message
  } catch (e) {
    if (searchValue?.length) errorMessage.value = "Xatolik yuz berdi"
    else verifyVoucher.value = null
  } finally {
    loading.value = false
  }
}, 400)

const formatVoucherCode = (e) => {
  const formatterValue = formatterVoucherCode(e)
  searchValue.value = formatterValue

  if (formatterValue) {
    searchVoucherVerify(formatterValue)
  }
}

const clearSearch = () => {
  searchValue.value = null
  searchVoucherVerify(null)
}
</script>

<template>
  <div class="container pt-7 pb-5">
    <div class="flex flex-col items-center gap-3 mb-10">
      <h1 class="text-3xl font-serif text-[#a8915b]">Vaucher xolati</h1>
      <div class="relative border-2 border-[#a8915b] rounded-full text-[#a8915b] overflow-hidden flex items-center">
        <input
            v-model="searchValue"
            class="search-input outline-none px-5 py-2"
            placeholder="Qidiring..."
            @input="formatVoucherCode"
        />
        <button
            v-if="searchValue?.length"
            class="px-4"
            @click="clearSearch"
        >
          <LazyIconClose  class="text-2xl"/>
        </button>
        <button v-else class="px-4">
          <LazyIconSearch class="text-2xl"/>
        </button>

      </div>
    </div>

    <div class="flex justify-center items-center min-h-36">
      <IconLoader v-if="loading" />
      <template v-else>
        <div v-if="!verifyVoucher" class="text-center flex justify-center gap-4">
          <p class="text-xl">Malumot yo'q!</p>
        </div>
        <div v-else-if="errorMessage" class="text-center">
          <p class="text-xl text-red-500">{{ errorMessage }}</p>
        </div>

        <LazyVaucherStatusInfo v-else-if="verifyVoucher" :voucher="verifyVoucher?.details"/>
      </template>
    </div>
  </div>
</template>

<style scoped>
</style>