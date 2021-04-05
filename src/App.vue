<template>
  <div id="app">
    <div v-if="errors.length > 0">
      {{ JSON.stringify(errors) }}
    </div>
    <div v-else>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand href="#">Provjeri</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Dom</b-nav-item>
              <b-nav-item
                :to="{
                  name: 'Timesheet',
                  params: { week: current.week, year: current.year },
                }"
                >Vremenski list</b-nav-item
              >
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <login-form v-if="!token" />
              <b-nav-item-dropdown right v-if="token">
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>{{ name }}</em>
                </template>
                <b-dropdown-item href="#" @click.prevent="Logout()"
                  >Sign Out</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <b-container>
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
  methods: {
    Logout: function () {
      this.$store.dispatch("logout");
      if (this.$route.name !== "Home") {
        this.$router.replace({ name: "Home" });
      }
    },
  },
  components: {
    LoginForm,
  },
  computed: {
    ...mapGetters(["errors", "token", "name"]),
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
