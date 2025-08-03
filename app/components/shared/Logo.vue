<script setup lang="ts">
// const localePath = useLocalePath();
interface IProps {
  theme?: 'dark' | 'light'
}

defineProps<IProps>()
</script>

<template>
  <router-link to="/" style="font-size: 2.25rem; line-height: 2.5rem">
    <template v-if="theme === 'light'">
      <IconLogoWhite/>
    </template>
    <template v-else>
      <LazyIconLogo/>
    </template>
  </router-link>
</template>