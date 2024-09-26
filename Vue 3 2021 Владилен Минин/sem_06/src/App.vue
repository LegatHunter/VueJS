<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{date}}</h2>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      date: new Date().toLocaleDateString(),
      news: [
        'Джо байден пдрс',
        'Vue 3 работает!!!'
      ],
      isOpen: false,
  }
  }
}
</script>

<style lang='scss'>

</style>
