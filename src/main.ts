import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Ada from "./components/Ada.vue";
import Ada2 from "./components/Ada2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Ada,
    },
    {
      path: "/two",
      component: Ada2,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
