<script setup>
const props = defineProps({
  index: Number,
  title: String,
  text: String,
})
</script>

<template>
  <div class="instructions-step_item flex items-start gap-3">
    <div class="!h-full">
      <div class="instructions-step_item-number w-12 h-12 bg-white rounded-full border flex justify-center items-center text-gray-light flex-shrink-0">
        {{ index }}
      </div>
    </div>

    <div class="w-full pb-20">
      <h2 class="text-lg font-bold text-primary">
        {{ title }}
      </h2>
      <h4 class="text-gray-light">
        {{ text }}
      </h4>
    </div>
  </div>
</template>