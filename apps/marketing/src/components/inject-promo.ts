import { createApp } from "vue";
import Promo from "./Promo.vue";

export const injectPromo = (el: HTMLElement) => {
  const app = createApp(Promo);
  app.mount(el);
};
