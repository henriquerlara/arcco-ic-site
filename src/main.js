import { createApp, createSSRApp } from "vue";
import App from "./App.vue";
import "./style.css";
const mount = document.querySelector("#app");
(mount.hasChildNodes() ? createSSRApp(App) : createApp(App)).mount(mount);
