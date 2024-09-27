<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <div class="list-item">
      <app-button @action="open">{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</app-button>
      <app-button color="danger" v-if="wasRead" @action="$emit('unmark', id)">Отметить не прочитанной</app-button>
    </div>
    <div v-if="isNewsOpen">
      <hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum esse harum illum mollitia nesciunt nulla
        provident quidem reprehenderit voluptatibus.</p>
      <app-button color="primary" @action="mark" v-if="!wasRead">Прочитано</app-button>
      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from "./appButton.vue";
import AppNewsList from "./AppNewsList.vue";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false
      }
    },
    wasRead: {
      type: Boolean,
    }
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
      isNewsRead: this.wasRead,
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
  },
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn("Нет id")
      return false
    },
    unmark: null,
  },
  components: {
    AppButton, AppNewsList
  }
}
</script>

<style>

</style>
