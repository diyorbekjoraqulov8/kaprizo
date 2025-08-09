<script setup>
const props = defineProps({
  index: Number,
  title: String,
  text: String,
})
</script>

<template>
  <div class="flex items-start gap-3">
    <div class="!h-full">
      <div class="w-7 h-7 flex justify-center items-center">
        {{ index }}
      </div>
    </div>

    <div class="w-full">
      <h2 class="text-lg font-bold text-primary">
        {{ title }}
      </h2>
      <h4 class="text-gray-light">
        {{ text }}
      </h4>
    </div>
  </div>
</template>