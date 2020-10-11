import "./index.scss";
import "./lib/elegant.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import Icon from "./icons/Icon.vue";
import "//at.alicdn.com/t/font_2113925_ne3hehcbrk.js";

const app = createApp(App);
app.component(Icon.name, Icon);
app.use(router);
app.mount("#app");
