<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
import {provide} from "vue";

const Accordion = ref({
  count: 0,
  active: null
})

provide('Accordion', Accordion.value)
</script>

<style lang="css" scoped>

</style>
