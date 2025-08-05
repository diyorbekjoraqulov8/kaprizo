<script setup lang="ts">
import { Collapse } from 'vue-collapsed'

const isExpanded = ref(null)

const list = computed(() => [
  {
    id: 1,
    title: 'Home',
    text: 'description',
    open: isExpanded.value === 1
  },
  {
    id: 2,
    title: 'Home 2',
    text: 'description 2',
    open: isExpanded.value === 2
  },
  {
    id: 3,
    title: 'Home 3',
    text: 'description 3',
    open: isExpanded.value === 3
  },
  {
    id: 4,
    title: 'Home 4',
    text: 'description 4',
    open: isExpanded.value === 4
  },
])
</script>

<template>
  <section id="faq" class="py-16 lg:py-32 bg-light">
    <div class="container">
      <p class="text-center mb-2 text-gray-700">Ko’p beriladigan savollar</p>

      <h3 class="text-4xl text-center text-dark font-bold mb-8 lg:mb-12">Savol-javoblar</h3>

      <ul>
        <li
          v-for="item in list"
        >
          <h2 @click="() => isExpanded = item.id">Salom</h2>
          <collapse :when="item.open">
            <p>{{ 'Collapsed '.repeat(100) }}</p>
          </collapse>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>