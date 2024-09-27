<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>
    <app-list>
      <template #default="{ idx, iter }">
        <span style="color: cadetblue">
          <strong>{{ idx + 1 }}</strong>
          {{ iter }}</span
        >
      </template>
    </app-list>
    <app-block>
      <p>Этот текст</p>
      <template v-slot:header><h3>Заголовок</h3></template>
      <template v-slot:footer>
        <hr />
        <small>Это футер</small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from "./appBlock.vue";
import AppList from "./AppList.vue";

export default {
  components: {
    AppBlock,
    AppList,
  },
};
</script>

<style lang="sass" scoped></style>
