<script setup lang="ts">
async function getVouchersVerify() {
  try {
    const { data, status, error, refresh } = await useFetch('/api/vouchers-verify', {
      method: "POST",
      body: { redeem_code: "0066-00038R" }
    })


    console.log(data.value)
  } catch (error) {
    console.error(error)
  }
}

getVouchersVerify()
</script>

<template>
  <MainHeaderIncome />

  <MainAbout />

  <MainAdvantages />

  <MainInstructions />

  <MainFaq />

  <MainPartner />
</template>