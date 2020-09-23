<template>
  <b-form-select required v-model="hourSelect">
    <template v-slot:first>
      <b-form-select-option value disabled :selected="hours === ''">-- Izberi št. ur --</b-form-select-option>
    </template>
    <b-form-select-option
      v-for="hour in hoursList"
      :key="hour"
      :selected="hours === hour"
      :value="hour"
    >{{ hour }}</b-form-select-option>
  </b-form-select>
</template>

<script>
import { format, addMinutes } from "date-fns";
import { HOUR_INTERVAL, HOUR_FORMAT } from "@/utils/consts";
export default {
  props: ["hours"],
  data: function () {
    return {
      hoursList: [],
      hourSelect: this.hours,
    };
  },
  mounted: function () {
    let start = new Date(0, 0, 0, 0, 0);
    const iterations = (24 * 60) / HOUR_INTERVAL;
    for (let i = 0; i < iterations; i++) {
      this.hoursList.push(format(start, HOUR_FORMAT));
      start = addMinutes(start, HOUR_INTERVAL);
    }
  },
  watch: {
    hours: function (value) {
      this.hourSelect = value;
    },
    hourSelect: function (value) {
      this.$emit("update:hours", value);
    },
  },
};
</script>

<style>
</style>