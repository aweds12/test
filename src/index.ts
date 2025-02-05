import dayjs from "dayjs";

export { isTokenExpired } from "./token-expiration-checker";

export const humanReadableDate = (date?: Date) => {
  if (!!date) {
    if (dayjs().diff(date, "second") < 60) {
      return `${dayjs().diff(date, "second")} секундын өмнө`;
    } else if (dayjs().diff(date, "minute") < 60) {
      return `${dayjs().diff(date, "minute")} минутын өмнө`;
    } else if (dayjs().diff(date, "hour") < 24) {
      return `${dayjs().diff(date, "hour")} цагийн өмнө`;
    } else if (
      dayjs().add(-1, "day").format("YYYY-MM-DD") ==
      dayjs().format("YYYY-MM-DD")
    ) {
      return "Өчигдөр";
    } else {
      return dayjs(date).format("YYYY-MM-DD");
    }
  }
  return dayjs().format("YYYY-MM-DD");
};
