<script setup lang="ts">
type ISharedButtonSize = 'default' | 'small' | 'large' | 'extra-large'
type ISharedButtonType = 'primary' | 'danger' | 'success' | 'warning' | 'default' | 'info'

interface IProps {
  size?: ISharedButtonSize
  type?: ISharedButtonType
}

const props = defineProps<IProps>();
</script>

<template>
  <button
    class="shared-btn"
    :data-size="props.size"
    :data-type="props.type"
  >
    <slot />
  </button>
</template>