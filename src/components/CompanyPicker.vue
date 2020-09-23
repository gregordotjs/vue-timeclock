<template>
  <b-form-select required v-model="workplaceSelect" v-if="workplaces">
    <b-form-select-option disabled value :selected="workplace_id === ''">Izberi podjetje</b-form-select-option>
    <b-form-select-option
      v-for="wp in workplaces"
      :key="wp.id"
      :selected="wp.id == workplace_id"
      :value="wp.id"
    >{{ wp.name }}</b-form-select-option>
  </b-form-select>
</template>

<script>
export default {
  props: ["workplace_id", "workplaces"],
  data: function () {
    return {
      workplaceSelect: this.workplace_id,
    };
  },
  watch: {
    workplace_id: function (value) {
      this.workplaceSelect = value;
    },
    workplaceSelect: function (value) {
      const valueToEmit = value === "" ? "" : parseInt(value);
      this.$emit("update:workplace_id", valueToEmit);
    },
  },
};
</script>

<style>
</style>