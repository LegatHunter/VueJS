<template>
  <hr/>
  <ul>
    <li v-for="item in news">{{ item.title }}</li>
  </ul>
</template>

<script>
export default {
  inject: ['news'],
}
</script>

<style lang="scss" scoped>

</style>
