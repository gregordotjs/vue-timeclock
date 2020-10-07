<template>
  <div class="about">
    <h1>Vnos ur za izbrani teden</h1>
    <!--
    <b-form-datepicker
      id="datepicker"
      v-model="datePickerValue"
      class="mb-2"
      :hide-header="true"
    ></b-form-datepicker>
    -->
    <div class="mb-4 mt-4">
      <a href @click.prevent="changeDate(true)" :disabled="isLoading"
        ><b-icon-arrow-left-circle scale="1.5" class="mr-2"
      /></a>
      {{ startOfCurrentWeek }} &mdash; {{ endOfCurrentWeek }}
      <a href @click.prevent="changeDate(false)" :disabled="isLoading"
        ><b-icon-arrow-right-circle scale="1.5" class="ml-2"
      /></a>
    </div>
    <b-form @submit.prevent="onSubmit()">
      <div v-if="isLoading">
        <b-spinner label="Loading..."></b-spinner>
      </div>
      <b-table-simple borderless responsive="true" v-else>
        <b-tbody>
          <b-tr
            v-for="(w, index) in weeks"
            v-bind:key="w.date"
            v-bind:set="(emptyRow = dateNotSet(w))"
          >
            <b-table-simple outlined>
              <b-tr>
                <b-td colspan="3">
                  <span
                    v-bind:class="emptyRow ? 'text-secondary' : 'text-success'"
                  >
                    {{ w.cleanDate }}
                    <b-icon-check-2-circle
                      variant="success"
                      scale="1.2"
                      v-if="!emptyRow"
                    />
                    <b-icon-circle
                      variant="secondary"
                      scale="1"
                      v-if="emptyRow"
                    />
                  </span>
                </b-td>
              </b-tr>
              <b-tr>
                <b-td>
                  <CompanyPicker
                    v-bind:workplace_id.sync="w.workplace_id"
                    :workplaces="workplaces"
                  />
                </b-td>
                <b-td>
                  <HourPicker v-bind:hours.sync="w.hours" />
                </b-td>
                <b-td class="w-25 mr-0 ml-0 pr-2 pl-0 text-right">
                  <b-button
                    size="sm"
                    variant="primary"
                    class="mr-1"
                    @click.prevent="addEntry(w, index)"
                  >
                    <span v-if="w.id"><b-icon-plus /></span>
                    <span v-else><b-icon-plus /></span>
                  </b-button>
                  <b-button
                    size="sm"
                    variant="danger"
                    v-if="w.id"
                    @click.prevent="deleteEntry(index, w.id)"
                  >
                    <b-icon-trash />
                  </b-button>
                </b-td>
              </b-tr>
            </b-table-simple>
          </b-tr>
        </b-tbody>
        <b-tfoot>
          <b-tr>
            <b-th colspan="4">Skupaj ur: {{ hoursSum }}</b-th>
          </b-tr>
        </b-tfoot>
      </b-table-simple>
      <button>Save all</button>
    </b-form>
    <div>
      <hr />
      <CompanyPicker
        v-bind:workplace_id.sync="workplace_id"
        :workplaces="workplaces"
      />
      <HourPicker v-bind:hours.sync="hours" />
      <button @click.prevent="UpdateOne('hours')">Set hours</button>
      <button @click.prevent="UpdateOne('workplace_id')">Set workplaces</button>
      <button @click.prevent="UpdateAll()">Set all</button>
    </div>
    <pre style="width: 200px; margin: 0 auto; text-align: left">
      {{ weeks }}
      </pre
    >
  </div>
</template>

<script>
// https://bootstrap-vue.org/docs/components/table#tables
import {
  startOfWeek,
  format,
  endOfWeek,
  parse,
  subWeeks,
  addWeeks,
  addDays,
} from "date-fns";
import { sl } from "date-fns/locale";
import { DATE_URL_FORMAT, WEEK_FORMAT } from "@/utils/consts";
import { getTimesheet, deleteTimesheet, postTimesheet } from "@/api/timesheet";
import { getWorkplaces } from "@/api/workplace";
import HourPicker from "@/components/HourPicker";
import CompanyPicker from "@/components/CompanyPicker";
import {
  BIconTrash,
  BIconPlus,
  BIconCheck2Circle,
  BIconCircle,
  BIconArrowLeftCircle,
  BIconArrowRightCircle,
} from "bootstrap-vue";

export default {
  name: "About",
  components: {
    HourPicker,
    CompanyPicker,
    BIconTrash,
    BIconCheck2Circle,
    BIconPlus,
    BIconCircle,
    BIconArrowLeftCircle,
    BIconArrowRightCircle,
  },
  data: function () {
    const week = this.$route.params.week;
    const year = this.$route.params.year;
    let date = addWeeks(new Date(year, 0), week - 1);
    if (week === 1) {
      date = endOfWeek(date);
    }
    return {
      hours: "",
      workplace_id: "",
      workplaces: [],
      weeks: [],
      week,
      year,
      date,
      isLoading: false,
      hoursSum: 0,
      datePickerValue: "",
    };
  },
  mounted: async function () {
    try {
      if (!this.areParamsValid()) {
        const year = format(new Date(), "yyy");
        this.date = new Date(year, 0);
        this.$router.replace({
          name: "Timesheet",
          params: { week: 1, year },
        });
        return;
      } else {
        const res = await getWorkplaces();
        this.workplaces = [...res.data.data];
        this.generateForm();
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    onSubmit: async function () {
      try {
        const res = await postTimesheet(this.weeks);
        const { data, result, errors } = res.data;
        if (result && errors.length === 0) {
          const updated = [];
          for (let datum of data) {
            const { hours_formated, workplace_id, id, date } = datum;
            const day = parse(date, "yyyy-MM-dd HH:mm:ss", new Date());

            updated.push({
              cleanDate: format(day, WEEK_FORMAT, { locale: sl }),
              date: format(day, DATE_URL_FORMAT),
              hours: hours_formated,
              workplace_id,
              id,
            });
          }
          this.weeks = [];
          this.weeks.push(...updated);
          this.sumHours();
        }
      } catch (error) {
        console.log(error);
      }
    },
    UpdateOne: function (key) {
      let value = key === "hours" ? this.hours : this.workplace_id;
      const weeks = this.weeks.map((week) => ({
        ...week,
        [key]: value,
      }));
      console.log(weeks.map((f) => f.hours));
      this.weeks = [];
      this.weeks.push(...weeks);
    },
    UpdateAll: function () {
      const weeks = this.weeks.map((week) => ({
        ...week,
        hours: this.hours,
        workplace_id: this.workplace_id,
      }));
      this.weeks = [];
      this.weeks.push(...weeks);
    },
    dateNotSet: function (timeEntry) {
      const { id } = timeEntry;
      return id === null;
    },
    addEntry: async function (timeEntry, index) {
      if (timeEntry.workplace_id === "" || timeEntry.hours === "") {
        this.showToast(
          "Select workplace and hours",
          "Data is not set",
          "danger"
        );
        return;
      }
      try {
        const res = await postTimesheet([timeEntry]);
        const { data, result, errors } = res.data;
        if (result && errors.length === 0) {
          const { hours_formated, workplace_id, id, date } = data[0];
          const day = parse(date, "yyyy-MM-dd HH:mm:ss", new Date());
          const updated = {
            cleanDate: format(day, WEEK_FORMAT, { locale: sl }),
            date: format(day, DATE_URL_FORMAT),
            hours: hours_formated,
            workplace_id,
            id,
          };
          this.$set(this.weeks, index, updated);
          this.sumHours();
          this.showToast(
            "Successfully saved!",
            "Data has been saved",
            "success"
          );
        }
      } catch (error) {
        console.log(error);
      }
    },
    deleteEntry: async function (index, id) {
      try {
        if (confirm("Želiš odstraniti?")) {
          const { data, status } = await deleteTimesheet(id);
          if (data.result === true && status === 200) {
            const entry = { ...this.weeks[index] };
            this.showToast(
              "Successfully deleted!",
              `Deleted entry for ${
                this.workplaces.find((wp) => wp.id === entry.workplace_id).name
              } (${entry.hours} hours)`,
              "success"
            );
            entry.workplace_id = "";
            entry.hours = "";
            entry.id = null;
            this.$set(this.weeks, index, entry);
            this.sumHours();
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    areParamsValid: function () {
      const week = parseInt(this.week);
      const year = parseInt(this.year);
      const yearNow = parseInt(format(new Date(), "yyy"));
      const offset = 10;
      if (
        !week ||
        !year ||
        week < 1 ||
        week > 53 ||
        year.toString().length !== 4 ||
        year < yearNow - offset ||
        year > yearNow + offset
      ) {
        return false;
      }
      return true;
    },
    generateForm: async function () {
      try {
        this.isLoading = true;
        this.weeks = [];
        const res = await getTimesheet(this.week, this.year);
        const data = res.data.data || [];

        let day = startOfWeek(this.date, { weekStartsOn: 1 });
        for (let i = 0; i < 7; i++) {
          let hours = "";
          let workplace_id = "";
          let id = null;

          if (data.length > 0) {
            const timeEntry = data.find(function (entry) {
              const entryDate = parse(
                entry.date,
                "yyyy-MM-dd HH:mm:ss",
                new Date()
              );
              return (
                format(entryDate, DATE_URL_FORMAT) ===
                format(day, DATE_URL_FORMAT)
              );
            });

            if (timeEntry) {
              hours = timeEntry.hours_formated;
              workplace_id = parseInt(timeEntry.workplace_id);
              id = timeEntry.id;
            }
          }

          this.weeks.push({
            cleanDate: format(day, WEEK_FORMAT, { locale: sl }),
            date: format(day, DATE_URL_FORMAT),
            hours,
            workplace_id,
            id,
          });

          day = addDays(day, 1);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
        this.sumHours();
      }
    },
    changeDate: function (isBack) {
      if (isBack) {
        this.date = subWeeks(this.date, 1);
      } else {
        this.date = addWeeks(this.date, 1);
      }
      this.week = format(this.date, "w");
      this.year = format(this.date, "yyy");
      this.$router.replace({
        name: "Timesheet",
        params: {
          week: this.week,
          year: this.year,
        },
      });
    },
    sumHours: function () {
      let sumMinutes = 0;
      this.weeks.forEach((w) => {
        if (w.hours) {
          const parts = w.hours.split(":");
          const h = parseInt(parts[0]) * 60;
          const m = parseInt(parts[1]);
          sumMinutes += h + m;
        }
      });
      const hours = Math.floor(sumMinutes / 60);
      const minutes = sumMinutes % 60;
      this.hoursSum = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    },
    showToast(header, title, variant = null) {
      this.$bvToast.toast(header, {
        title,
        variant,
        toaster: "b-toaster-bottom-right",
        solid: true,
      });
    },
  },
  computed: {
    startOfCurrentWeek: function () {
      return format(
        startOfWeek(this.date, { weekStartsOn: 1 }),
        "E d. M. yyy",
        { locale: sl }
      );
    },
    endOfCurrentWeek: function () {
      return format(endOfWeek(this.date, { weekStartsOn: 1 }), "E d. M. yyy", {
        locale: sl,
      });
    },
  },
  watch: {
    "$route.params": function (/*params*/) {
      this.generateForm();
    },
    datePickerValue: function (value) {
      this.date = parse(value, "yyyy-MM-dd", new Date());
      this.week = format(this.date, "w");
      this.year = format(this.date, "yyy");
      this.$router.replace({
        name: "Timesheet",
        params: {
          week: this.week,
          year: this.year,
        },
      });
    },
  },
};
</script>
