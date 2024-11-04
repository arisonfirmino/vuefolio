import { createApp } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import App from "./App.vue";

const app = createApp(App);

AOS.init({
  duration: 1000,
  once: false,
});

app.mount("#app");
