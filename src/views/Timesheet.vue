<template>
  <div class="mb-4">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand tag="h1" class="mb-0"
        >Unesite sate za prošlu sedmicu</b-navbar-brand
      >
    </b-navbar>

    <div class="mb-2 mt-2">
      <a
        href
        @click.prevent="changeDate(true)"
        :disabled="isLoading"
        v-bind:hidden="true"
        ><b-icon-arrow-left-circle scale="1.5" class="mr-2"
      /></a>
      {{ startOfCurrentWeek }} &mdash; {{ endOfCurrentWeek }}
      <a
        href
        @click.prevent="changeDate(false)"
        :disabled="isLoading"
        v-bind:hidden="true"
        ><b-icon-arrow-right-circle scale="1.5" class="ml-2"
      /></a>
    </div>
    <div v-if="isLoading">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <b-form @submit.prevent="onSubmit()" v-else>
      <b-card
        v-for="(w, index) in weeks"
        v-bind:key="w.date"
        v-bind:set="(emptyRow = dateNotSet(w))"
        class="mb-3"
        v-bind:border-variant="emptyRow ? '' : 'success'"
      >
        <b-card-text>
          <b-row>
            <b-col cols="12" class="text-center">
              <span
                class="text-capitalize"
                v-bind:class="emptyRow ? 'text-secondary' : 'text-success'"
              >
                {{ w.cleanDate }}

                <b-icon-check-2-circle
                  variant="success"
                  scale="1.2"
                  v-if="!emptyRow"
                />
                <b-icon-circle variant="secondary" scale="1" v-if="emptyRow" />
              </span>
              <b-button variant="outline-light" v-if="w.id" class="p-0 ml-4">
                <b-icon-trash
                  variant="danger"
                  @click.prevent="deleteEntry(index, w.id)"
                /> </b-button
            ></b-col>
          </b-row>
        </b-card-text>

        <b-card-text class="card-subtitle text-muted mb-1">
          <b-row> </b-row>
        </b-card-text>
        <b-card-text class="p-0 m-0">
          <div v-if="!emptyRow && !w.edit">
            <b-row>
              <b-col cols="12" class="text-center">
                <span
                  >{{ workplaces.find((wp) => wp.id === w.workplace_id).name }}:
                  {{ w.hours }} ur
                </span>
                <b-button variant="outline-light" class="p-0 ml-4">
                  <b-icon-pencil-fill
                    variant="dark"
                    @click.prevent="setEdit(index)"
                  /> </b-button
              ></b-col>
            </b-row>
          </div>

          <div v-else>
            <b-row>
              <b-col class="mb-2">
                <CompanyPicker
                  :workplaces="workplaces"
                  @update="handleCompanyUpdate($event, index)"
                  v-bind:workplace_id.sync="w.workplace_id"
                />
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-timepicker
                  v-model="w.hours_from"
                  locale="sl"
                  placeholder="Začetek"
                  minutes-step="15"
                  v-bind:hide-header="true"
                ></b-form-timepicker>
              </b-col>
              <b-col>
                <b-form-timepicker
                  v-model="w.hours_to"
                  locale="sl"
                  placeholder="Konec"
                  minutes-step="15"
                  v-bind:hide-header="true"
                ></b-form-timepicker>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col>
                <b-button
                  block
                  variant="primary"
                  @click.prevent="addEntry(w, index)"
                >
                  <span v-if="!w.isLoading" variant="primary">
                    Spremi <span v-if="!emptyRow">spremembe</span>
                  </span>
                  <b-spinner small v-if="w.isLoading"></b-spinner>
                </b-button>

                <b-button
                  v-if="!emptyRow"
                  block
                  variant="outline-primary"
                  @click.prevent="cancelEdit(index)"
                >
                  <span v-if="!w.isLoading" variant="primary"> Prekliči </span>
                  <b-spinner small v-if="w.isLoading"></b-spinner>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-card-text>
      </b-card>
      <p>
        <em>Ukupno sati: {{ hoursSum }}</em>
      </p>
      <b-button type="submit">Spremi sve</b-button>
    </b-form>

    <b-form v-bind:hidden="true">
      <b-row>
        <b-col cols="5" class="ml-0 mr-0 pl-2 pr-0">
          <CompanyPicker
            v-bind:workplace_id.sync="workplace_id"
            :workplaces="workplaces"
        /></b-col>
        <b-col cols="5" class="ml-0 mr-0 pl-2 pr-2"
          ><HourPicker v-bind:hours.sync="hours"
        /></b-col>
        <b-col cols="2" class="ml-0 mr-0 pl-0 pr-0 text-center">
          <b-button variant="primary" @click.prevent="Update()"> Set </b-button>
        </b-col>
      </b-row>
    </b-form>
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
import { srLatn } from "date-fns/locale";
import { DATE_URL_FORMAT, WEEK_FORMAT } from "@/utils/consts";
import { getTimesheet, deleteTimesheet, postTimesheet } from "@/api/timesheet";
import { getWorkplaces } from "@/api/workplace";
import HourPicker from "@/components/HourPicker";
import CompanyPicker from "@/components/CompanyPicker";
import { generateUrl, generateHours } from "@/utils/helpers";
import {
  BIconTrash,
  //BIconPlusCircle,
  //BIconXCircle,
  //BIconCheck2Circle,
  //BIconCircle,
  BIconArrowLeftCircle,
  BIconArrowRightCircle,
  BIconPencilFill,
} from "bootstrap-vue";

const locale = srLatn;
const defaults = {
  hours_from: "07:00",
  hours_to: "17:00",
  edit: false,
  isLoading: false,
};

export default {
  name: "About",
  components: {
    HourPicker,
    CompanyPicker,
    BIconPencilFill,
    //BIconXCircle,
    BIconTrash,
    //BIconCheck2Circle,
    //BIconPlusCircle,
    //BIconCircle,
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
      touched: false,
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
        const date = generateUrl();
        this.date = date.date;
        this.$router.replace({
          name: "Timesheet",
          params: { week: date.week, year: date.year },
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
    handleCompanyUpdate: function (workplace_id, index) {
      if (this.touched) return;
      const weeks = this.weeks.map((week, i) => {
        if (week.workplace_id !== "" && i !== index) return week;
        return {
          ...week,
          workplace_id,
        };
      });
      this.weeks = [];
      this.weeks.push(...weeks);
      this.touched = true;
    },
    generateHours: function () {},
    onSubmit: async function () {
      try {
        var batch = this.weeks
          .filter(
            (w) =>
              w.hours_from !== "" && w.hours_to !== "" && w.workplace_id !== ""
          )
          .map((w) => ({
            date: w.date,
            workplace_id: w.workplace_id,
            hours_from: w.hours_from,
            hours_to: w.hours_to,
          }));
        const res = await postTimesheet(batch);
        const { data, result, errors } = res.data;
        if (result && errors.length === 0) {
          const updated = [];
          for (let datum of data) {
            const { hours_from, hours_to, workplace_id, id, date } = datum;
            const day = parse(date, "yyyy-MM-dd HH:mm:ss", new Date());

            updated.push({
              ...defaults,
              cleanDate: format(day, WEEK_FORMAT, { locale }),
              date: format(day, DATE_URL_FORMAT),
              hours: generateHours(hours_from, hours_to),
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
    Update: function () {
      const updateAllProps = {};
      if (this.hours) {
        updateAllProps.hours = this.hours;
      }
      if (this.workplace_id) {
        updateAllProps.workplace_id = this.workplace_id;
      }
      const weeks = this.weeks.map((week) => ({
        ...week,
        ...updateAllProps,
      }));
      this.weeks = [];
      this.weeks.push(...weeks);
    },
    dateNotSet: function (timeEntry) {
      const { id } = timeEntry;
      return id === null;
    },
    addEntry: async function (timeEntry, index) {
      if (
        timeEntry.workplace_id === "" ||
        timeEntry.hours_from === "" ||
        timeEntry.hours_to === ""
      ) {
        this.showToast(
          "Odaberi gradilište i sati",
          "Podaci nisu postavljeni",
          "danger"
        );
        return;
      }
      this.weeks[index].isLoading = true;
      try {
        const res = await postTimesheet([
          {
            date: timeEntry.date,
            workplace_id: timeEntry.workplace_id,
            hours_from: timeEntry.hours_from.slice(
              0,
              timeEntry.hours_from.length - 3
            ),
            hours_to: timeEntry.hours_to.slice(
              0,
              timeEntry.hours_to.length - 3
            ),
          },
        ]);
        const { data, result, errors } = res.data;
        if (result && errors.length === 0) {
          const { workplace_id, id, date, hours_from, hours_to } = data[0];
          const day = parse(date, "yyyy-MM-dd HH:mm:ss", new Date());
          const updated = {
            ...defaults,
            cleanDate: format(day, WEEK_FORMAT, { locale }),
            date: format(day, DATE_URL_FORMAT),
            hours: generateHours(hours_from, hours_to),
            hours_from,
            hours_to,
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
        if (confirm("Želite li ga ukloniti?")) {
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
            entry.edit = false;
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
          const isWorkweek = i < 5;
          let hours_from = isWorkweek ? defaults.hours_from : "";
          let hours_to = isWorkweek ? defaults.hours_to : "";
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
              hours = generateHours(timeEntry.hours_from, timeEntry.hours_to);
              hours_from = timeEntry.hours_from;
              hours_to = timeEntry.hours_to;
              workplace_id = parseInt(timeEntry.workplace_id);
              id = timeEntry.id;
            }
          }

          this.weeks.push({
            ...defaults,
            cleanDate: format(day, WEEK_FORMAT, { locale }),
            date: format(day, DATE_URL_FORMAT),
            hours,
            hours_from,
            hours_to,
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
    setEdit: function (index) {
      this.weeks[index].edit = true;
    },
    cancelEdit: function (index) {
      this.weeks[index].edit = false;
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
          const parts = w.hours.split(",");
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
        { locale }
      );
    },
    endOfCurrentWeek: function () {
      return format(endOfWeek(this.date, { weekStartsOn: 1 }), "E d. M. yyy", {
        locale,
      });
    },
  },
  watch: {
    "$route.params": function (/*params*/) {
      this.generateForm();
    },
    workplace_id: function (value) {
      console.log(value);
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
