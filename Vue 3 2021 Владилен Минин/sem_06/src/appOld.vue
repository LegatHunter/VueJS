<template>
  <div class="container pt-1">
    <div class="card">
      <h3>Актуальные новости {{ date }}</h3>
      <span>Открыто: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
    </div>
    <app-news
      v-for="item in news"
      :title="item.title"
      :key="item.id"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unmark='unreadNews'
    ></app-news>

  </div>
</template>

<script>
import AppNews from "./AppNews";

export default {
  data() {
    return {
      date: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Джо байден пдрс',
          id: 1,
          isOpen: false,
          wasRead: false,
        },
        {
          title: 'Vue 3 работает!!!',
          id: 2,
          isOpen: false,
          wasRead: false,
        }
      ],
    }
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unreadNews(id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    },
  },
  provide() {
    return {
      news: this.news
    }
  },
  components: {
    AppNews,
  }
}
</script>

<style lang='sass' scoped>
h3
  color: red

</style>
