<script setup lang="ts">
// const localePath = useLocalePath();
interface IProps {
  theme?: 'dark' | 'light'
}

defineProps<IProps>()

const scrollToSmooth = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div @click="scrollToSmooth" style="font-size: 2.25rem; line-height: 2.5rem; cursor: pointer;">
    <template v-if="theme === 'light'">
      <IconLogoWhite/>
    </template>
    <template v-else>
      <LazyIconLogo/>
    </template>
  </div>
</template>