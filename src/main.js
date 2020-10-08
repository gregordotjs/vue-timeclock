import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { store } from "./store/store";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

// TODO! init store: https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch("initialiseStore");
  },
  render: (h) => h(App),
}).$mount("#app");
