<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

const searchValue = ref(null)
const errorMessage = ref()
const verifyVoucher = ref({
  "status": "usable",
  "message": "Voucher is valid and ready for redemption",
  "details": {
    "voucher_amount": 100000,
    "minimum_purchase": 100000,
    "expires_on": "2025-09-19",
    "days_until_expiration": 26
  }
})
const loading = ref(false)

const searchVoucherVerify = useDebounceFn(async (value: string | null) => {
  loading.value = true
  const { data, error } = await useFetch('/api/vouchers-verify', {
    method: "POST",
    body: { redeem_code: value }
  })

  if (error.value) {
    if (searchValue?.length) errorMessage.value = "Xatolik yuz berdi"
    else verifyVoucher.value = null
  } else {
    console.log('2: ', data.value)
    verifyVoucher.value = data.value
    errorMessage.value = undefined
    if (verifyVoucher.value?.status === 'invalid') errorMessage.value = verifyVoucher.value?.message
  }

  loading.value = false
}, 400)

const clearSearch = () => {
  searchValue.value = null
  searchVoucherVerify(null)
}
</script>
<!--#ebd8c5-->
<template>
  <div class="container pt-7 pb-5">
    <div class="flex flex-col items-center gap-3 mb-10">
      <h1 class="text-3xl font-serif text-[#a8915b]">Vaucher xolati</h1>

      <div class="relative border-2 border-[#a8915b] rounded-full text-[#a8915b] overflow-hidden flex items-center">
        <input
            v-model="searchValue"
            class="search-input outline-none px-5 py-2"
            placeholder="Qidiring..."
            @input="({target}) => searchVoucherVerify(target?.value)"
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

        <LazyVaucherStatusInfo v-else-if="verifyVoucher"/>
      </template>
    </div>
  </div>
</template>

<style scoped>
</style>