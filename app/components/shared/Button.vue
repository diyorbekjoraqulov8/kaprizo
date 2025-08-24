<script setup lang="ts">
type ISharedButtonSize = 'default' | 'small' | 'large' | 'extra-large'
type ISharedButtonType = 'primary' | 'danger' | 'success' | 'warning' | 'default' | 'info'

interface IProps {
  size?: ISharedButtonSize
  type?: ISharedButtonType,
  outline?: boolean,
  to?: string
}

const props = defineProps<IProps>();
</script>

<template>
  <component
    :is="to ? 'router-link' : 'button'"
    class="shared-btn"
    :data-size="props.size"
    :data-type="props.type"
    :data-outline="outline"
    :to="to"
  >
    <slot />
  </component>
</template>