<script setup lang="ts">

const faqAccordions = [
  {
    title: 'salom',
    text: 'salom111111111',
  }
]
</script>

<template>
  <section id="faq" class="py-32 bg-light">
    <div class="container">
      <p class="text-center mb-2 text-gray-700">Ko’p beriladigan savollar</p>

      <h3 class="text-4xl text-center text-dark font-bold mb-12">Savol-javoblar</h3>

      <div>
<!--        <SharedAccordion :accordion-list="faqAccordions" class-name="gap-4 shadow border px-4 py-2">-->
<!--          <template #content="{data}">-->
<!--            <div class="border p-4 ">-->
<!--              {{ data?.text }}-->
<!--            </div>-->
<!--          </template>-->
<!--        </SharedAccordion>-->
        <SharedAccordion>
          <SharedAccordionCard>
            <template #accordion-trigger>
              <h3>Item 1</h3>
            </template>
            <template #accordion-content>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </template>
          </SharedAccordionCard>

          <SharedAccordionCard>
            <template #accordion-trigger>
              <h3>Item 2</h3>
            </template>
            <template #accordion-content>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </template>
          </SharedAccordionCard>

          <SharedAccordionCard>
            <template #accordion-trigger>
              <h3>Item 3</h3>
            </template>
            <template #accordion-content>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </template>
          </SharedAccordionCard>
        </SharedAccordion>
      </div>
    </div>
  </section>
</template>

<style scoped></style>