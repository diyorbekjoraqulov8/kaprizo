<template>
  <li class="accordion__item transition-all">
    <div
        class="accordion__trigger"
        :class="{ accordion__trigger_active: visible }"
        @click="open"
    >
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
    </div>

    <div class="transition-all accordion__content h-0 border border-red-600 overflow-hidden box-border" :class="[visible && 'h-max']">
      <slot name="accordion-content"></slot>
    </div>
  </li>
</template>

<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index === this.Accordion.active;
    },
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
};
</script>

<style lang="css" scoped>
.accordion__item {
  cursor: pointer;
  padding: 10px 20px 10px 40px;
  border-bottom: 1px solid #ebebeb;
  position: relative;
}

.accordion__trigger {
  display: flex;
  align-items: center;
  gap: 12px;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.5s ease-in-out;
  height: 40px;
}
.accordion-enter-from,
.accordion-leave-to {
  height: 0;
}
</style>
