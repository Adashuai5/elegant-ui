import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Icon from "./icons/Icon.vue";
import "//at.alicdn.com/t/font_2113925_op7f076vdzb.js";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
    },
  ],
});

const app = createApp(App);
app.component(Icon.name, Icon);
app.use(router);
app.mount("#app");
