<template>
  <form v-on:submit.prevent="onSubmit()" v-if="!token">
    <input type="text" placeholder="E-mail" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button>Login</button>
  </form>
  <div v-else>
    Pozdravljen, kolega {{ name }}
    <a href @click.prevent="logout()">Odjavi</a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LoginForm",
  data: function () {
    return {
      email: "elvir@bosna.ba",
      password: "foo13",
    };
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout");
      this.$router.replace({ name: "Home" });
    },
    onSubmit: function () {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
  computed: {
    ...mapGetters(["name", "token"]),
  },
};
</script>
