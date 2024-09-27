<template>
  <div class="container pt-1">
    <div class="card">
      <AppAsync></AppAsync>
      <h2>Динамические и асинхронные компоненты</h2>

      <app-button :color="oneColor" @action="active = 'one'">One </app-button>
      <app-button :color="twoColor" @action="active = 'two'">Two </app-button>
    </div>
    <keep-alive><component :is="componentName"></component></keep-alive>
  </div>
</template>

<script>
import appButton from "@/appButton.vue";
import AppTextOne from "@/AppTextOne.vue";
import AppTextTwo from "@/AppTextTwo.vue";
import AppAsync from "@/AppAsync.vue";

export default {
  data() {
    return {
      active: "one",
    };
  },
  mounted() {
    setTimeout(() => {
      this.componentName = "new comp name";
    }, 1500);
  },
  components: { AppAsync, appButton, AppTextTwo, AppTextOne },
  computed: {
    // componentName() {
    //   return "app-text-" + this.active;
    // },
    componentName: {
      get() {
        return "app-text-" + this.active;
      },
      set(value) {
        console.log("componentName", value);
      },
    },
    oneColor() {
      return this.active === "one" ? "primary" : "";
    },
    twoColor() {
      return this.active === "two" ? "primary" : "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
