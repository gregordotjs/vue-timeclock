<template>
  <b-nav-form v-on:submit.prevent="onSubmit()">
    <b-form-input
      type="email"
      size="sm"
      class="mr-sm-2"
      placeholder="e-mail"
      v-model="email"
    ></b-form-input>
    <b-form-input
      type="password"
      size="sm"
      class="mr-sm-2"
      placeholder="password"
      v-model="password"
    ></b-form-input>
    <b-button size="sm" class="my-2 my-sm-0" type="submit">Login</b-button>
  </b-nav-form>
</template>

<script>
export default {
  name: "LoginForm",
  data: function () {
    return {
      email: "elvir@bosna.ba",
      password: "foo13",
    };
  },
  methods: {
    onSubmit: function () {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
