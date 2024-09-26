

<template>
  <div class="card">
    <h3>{{ item }}</h3>
    <button class="btn" @click="isOpen = !isOpen">Открыть</button>
    <p v-if="isOpen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum esse harum illum mollitia nesciunt nulla provident quidem reprehenderit voluptatibus.</p>
  </div>
</template>

<script>
export default {
  data () {
    return{
      item: 'Str',
      isOpen: false
    }
  }
}
</script>

<style scoped>

</style>
