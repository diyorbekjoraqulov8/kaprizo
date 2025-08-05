<script setup lang="ts">
import { Collapse } from 'vue-collapsed'

const isExpanded = ref<number>()

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

function toggleCollapse(collapseId: number) {
  if (isExpanded.value === collapseId) isExpanded.value = undefined
  else isExpanded.value = collapseId
}
</script>

<template>
  <section id="faq" class="py-16 lg:py-32 bg-light">
    <div class="container">
      <p class="text-center mb-2 text-gray-700">Ko’p beriladigan savollar</p>

      <h3 class="text-4xl text-center text-dark font-bold mb-8 lg:mb-12">Savol-javoblar</h3>

      <ul class="flex flex-col gap-2">
        <li
          v-for="item in list"
        >
          <div
            class="flex items-center gap-6 border p-6 cursor-pointer rounded-md"
            @click="() => toggleCollapse(item.id)"
          >
            <button class="p-2 bg-muted rounded-md">
              <LazyIconMinus v-if="item.open" class="text-xl text-primary"/>
              <LazyIconPlus v-else class="text-xl text-primary"/>
            </button>

            <p class="text-base">{{ item.title }}</p>
          </div>
          <collapse :when="item.open">
            <p class="px-6 py-2">{{ item.text }}</p>
          </collapse>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>