import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import { router } from "./router";
import Icon from "./icons/Icon.vue";
import "//at.alicdn.com/t/font_2113925_op7f076vdzb.js";

const app = createApp(App);
app.component(Icon.name, Icon);
app.use(router);
app.mount("#app");
