<template>
  <div>
    <button class="btn" :class="color" @click="$emit('action')">
      <slot/>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
      validator(value) {
        ['', 'primary', 'danger'].includes(value)
      }
    }
  },
  emits: ['action']
}
</script>

<style lang="scss" scoped>

</style>
