import {
  getWeek,
  getYear,
  startOfWeek,
  format,
  endOfWeek,
  parse,
  subWeeks,
  addWeeks,
  differenceInMinutes,
} from "date-fns";

const cfg = { weekStartsOn: 1 };

export const generateUrl = (date = null) => {
  let today = date ? new Date(date) : new Date();
  today = subWeeks(today, 1); // zakomentiraj ta del, če želiš za aktualni teden
  return {
    week: getWeek(today, cfg),
    year: getYear(today, cfg),
    date: today,
  };
};

export const generateHours = (from, to) => {
  const min = from.split(":");
  const max = to.split(":");
  const start = new Date(0, 0, 0, min[0], min[1]);
  const end = new Date(0, 0, 0, max[0], max[1]);

  const totalMinutes = differenceInMinutes(end, start);
  return `${Math.floor(totalMinutes / 60)},${totalMinutes % 60}`;
};

export const dateMngr = (date) => ({
  date: date,
  getDateFromWeeksAndYears: function(week, year) {
    this.date = parse(week, "w", new Date(year, 0, 0));
    return this.date;
  },
  addWeeks: function(noWeeks) {
    this.date = addWeeks(this.date, noWeeks);
  },
  removeWeeks: function(noWeeks) {
    this.date = subWeeks(this.date, noWeeks);
  },
  formatUrl: function() {
    const parts = format(this.date, "I-yyyy").split("-");
    return {
      week: parts[0],
      year: parts[1],
    };
  },
  getWeeks: function() {
    return format(this.date, "w", { weekStartsOn: 1 });
  },
  formatSpan: function() {
    return `${format(
      startOfWeek(this.date, { weekStartsOn: 1 }),
      "E yyyy-MM-dd"
    )} &dash; ${format(
      endOfWeek(this.date, { weekStartsOn: 1 }),
      "E yyyy-MM-dd"
    )}`;
  },
});
