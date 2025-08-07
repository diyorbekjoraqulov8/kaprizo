<script setup lang="ts">
// const localePath = useLocalePath();
interface IProps {
  theme?: 'dark' | 'light'
}

const props = defineProps<IProps>()

const scrollToSmooth = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div @click="scrollToSmooth" style="font-size: 2.25rem; line-height: 2.5rem; cursor: pointer;">
    <LazyIconLogo
        class="text-6xl"
        :class="[ props?.theme === 'light' ? 'text-[#111F42]' : 'text-white' ]"
    />
  </div>
</template>