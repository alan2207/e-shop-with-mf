import { createApp } from "vue";
import Promo from "./Promo.vue";

export const mountPromo = (el: HTMLElement) => {
  const app = createApp(Promo);
  app.mount(el);
};
