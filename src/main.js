import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { Login } from "@/api/auth";
import { getUserInfo } from "@/api/user";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Vuex)
Vue.config.productionTip = false

// TODO! init store: https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store
const store = new Vuex.Store({
  state: {
    user: {
      name: '',
      email: '',
      token: null,

    },
    errors: []
  },
  mutations: {
    setErrors(state, error) {
      state.errors.push(error);
    },
    setToken(state, token) {
      state.user.token = token;
    },
    setUserInfo(state, { name, email }) {
      state.user = {
        ...state.user,
        name,
        email
      };
    }
  },
  getters: {
    name: state => state.user.name,
    email: state => state.user.email,
    token: state => state.user.token,
    errors: state => state.errors
  },
  actions: {
    async initialiseStore(context) {
      if (localStorage.getItem('token')) {
        context.commit("setToken", localStorage.getItem('token'));
        context.dispatch("getUserData");
      }
    },
    async logout(context) {
      localStorage.removeItem('token');
      context.commit("setToken", null);
      context.commit("setUserInfo", { email: null, name: null });
    },
    async login(context, payload) {
      try {
        const rl = await Login(payload.email, payload.password);
        const token = rl.data.data;
        context.commit("setToken", token);
        localStorage.setItem("token", token);
        context.dispatch("getUserData");
      } catch (error) {
        context.commit("setErrors", error);
      }
    },
    async getUserData(context) {
      try {
        const rui = await getUserInfo();
        const { email, name } = rui.data;
        context.commit("setUserInfo", { email, name });
      } catch (error) {
        const { response, statusText } = { ...error };
        if (response.status === 401) {
          localStorage.removeItem('token');
          context.commit("setErrors", statusText);
        } else {
          context.commit("setErrors", statusText);
        }

      }
    }
  }
});


new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch('initialiseStore');
  },
  render: h => h(App)
}).$mount('#app')
