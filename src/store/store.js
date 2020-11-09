import { Login } from "@/api/auth";
import { getUserInfo } from "@/api/user";
import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { generateUrl } from "../utils/helpers";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      name: "",
      email: "",
      token: null,
    },
    errors: [],
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
        email,
      };
    },
  },
  getters: {
    name: (state) => state.user.name,
    email: (state) => state.user.email,
    token: (state) => state.user.token,
    errors: (state) => state.errors,
  },
  actions: {
    async initialiseStore(context) {
      if (localStorage.getItem("token")) {
        context.commit("setToken", localStorage.getItem("token"));
        context.dispatch("getUserData", false);
      }
    },
    async logout(context) {
      localStorage.removeItem("token");
      context.commit("setToken", null);
      context.commit("setUserInfo", { email: null, name: null });
    },
    async login(context, payload) {
      try {
        const rl = await Login(payload.email, payload.password);
        const token = rl.data.data;
        context.commit("setToken", token);
        localStorage.setItem("token", token);
        context.dispatch("getUserData", true);
      } catch (error) {
        context.commit("setErrors", error);
      }
    },
    async getUserData(context, shouldRedirect) {
      try {
        const rui = await getUserInfo();
        const { email, name } = rui.data;
        context.commit("setUserInfo", { email, name });
        const date = generateUrl();
        this.date = date.date;
        shouldRedirect && router.replace({
          name: "Timesheet",
          params: { week: date.week, year: date.year },
        });
      } catch (error) {
        localStorage.removeItem("token");
        context.dispatch("logout");
      }
    },
  },
});
