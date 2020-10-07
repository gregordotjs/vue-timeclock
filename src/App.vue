<template>
  <div id="app">
    <div v-if="errors.length > 0">
      {{ JSON.stringify(errors) }}
    </div>
    <div v-else>
      <b-container>
        <login-form />
        <div id="nav">
          <router-link to="/">Home</router-link>|
          <router-link
            :to="{
              name: 'Timesheet',
              params: { week: current.week, year: current.year },
            }"
            >Timesheet</router-link
          >
        </div>

        <router-view />
      </b-container>
    </div>
  </div>
</template>

<script>
import { generateUrl } from "@/utils/helpers";
import LoginForm from "@/components/LoginForm";
import { mapGetters } from "vuex";

export default {
  data: function () {
    return {
      current: generateUrl(),
    };
  },
  components: {
    LoginForm,
  },
  computed: {
    ...mapGetters(["errors"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
