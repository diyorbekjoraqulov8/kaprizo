<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { onClickOutside } from '@vueuse/core'

const emits = defineEmits(['close'])

const target = useTemplateRef<HTMLElement>('target')

onClickOutside(target, () => emits('close'))
</script>

<template>
  <div
      ref="target"
      class="p-4 fixed top-0 left-0 w-11/12 min-[400px]:w-3/5 h-dvh bg-white z-50"
  >
    <div class="flex items-center justify-between gap-4 mb-4">
      <LazySharedLogo theme="light" />

      <button @click="() => emits('close', $event)" class="text-xl p-2 rounded bg-light text-gray-light border">
        <IconClose />
      </button>
    </div>
    <MainHeaderNavbar :is-mobile="true" @select="() => emits('close', $event)"/>
  </div>
</template>

<style scoped>

</style>