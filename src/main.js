import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// vuetify in main.js
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
//main styles
import "@/scss/main.scss";

// swiper config
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// emitter config
import mitt from "mitt";
const Emitter = mitt();

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .provide("Emitter", Emitter)
  .use(createPinia())
  .use(vuetify)
  .use(router)
  .mount("#app");
