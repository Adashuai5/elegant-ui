import "./index.scss";
import "./lib/elegant.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "github-markdown-css";
import Markdown from "./components/Markdown.vue";
import "//at.alicdn.com/t/font_2113925_ne3hehcbrk.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("Markdown", Markdown);
