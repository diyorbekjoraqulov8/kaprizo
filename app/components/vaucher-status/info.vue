<script setup lang="ts">

</script>

<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 mb-6">
      <div>
        <div class="flex flex-col gap-3">
          <div class="info-item">
            <div class="info-item__prepend">
              <LazyIconScan class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">Vaucher raqami</p>
              <p class="info-item__append__value">243u23932 8934</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item__prepend">
              <LazyIconPerson class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">Foydalanuvchi</p>
              <p class="info-item__append__value">243u23932 8934</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item__prepend">
              <LazyIconPhone class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">Telefon</p>
              <p class="info-item__append__value">243u23932 8934</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item__prepend">
              <LazyIconCalendar class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">Sotib olingan sana</p>
              <p class="info-item__append__value">243u23932 8934</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item__prepend">
              <LazyIconClock class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">Amal qilish muddati</p>
              <p class="info-item__append__value">243u23932 8934</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item__prepend">
              <LazyIconList class="info-item__prepend__icon"/>
            </div>
            <div class="info-item__append">
              <p class="info-item__append__label">Shartlar</p>
              <p class="info-item__append__value">243u23932 8934</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="border border-gold-text w-[300px] h-[300px] flex justify-center items-center rounded-full">
          <NuxtImg src="advantage.png"/>
        </div>
      </div>
    </div>

    <div class="w-max mx-auto info-item">
      <div class="info-item__prepend">
        <LazyIconPhone class="info-item__prepend__icon"/>
      </div>
      <div class="info-item__append">
        <p class="info-item__append__label">Operator bilan aloqa</p>
        <a href="tel:+998884384" class="info-item__append__value">243u23932 8934</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-item {
  @apply flex gap-2 items-center;

  &__prepend {
    @apply border-2 border-gold-text w-9 h-9 flex justify-center items-center flex-shrink-0 rounded-full;
    &__icon {
      @apply text-xl text-gold-text;
    }
  }
  &__append {
    &__label {
      @apply text-sm text-gold-text;
    }
  }
}
</style>