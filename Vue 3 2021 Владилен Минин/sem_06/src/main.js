import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import TheHeader from "./TheHeader.vue";
import "./theme.css";

const app = createApp(App);

// global
app.component("the-header", TheHeader);
app.component(
  "appAsync",
  defineAsyncComponent(() => import("./AppAsync.vue"))
);

app.mount("#app");
