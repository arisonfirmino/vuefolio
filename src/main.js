import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import "./globals.css";
import App from "./App.vue";

const app = createApp(App);

app.use(MotionPlugin);

app.mount("#app");
