import { createApp } from "vue";
import Home from "./Home.vue";

export const injectHome = (el: HTMLElement) => {
  const app = createApp(Home);
  app.mount(el);
};
