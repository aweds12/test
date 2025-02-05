const dayjs = require("dayjs");

export const humanReadableDate = (date?: string): string => {
  if (!date) return "Огноо олдсонгүй";

  const now = dayjs();
  const inputDate = dayjs(date);
  const diffInSeconds = now.diff(inputDate, "second");
  const diffInMinutes = now.diff(inputDate, "minute");
  const diffInHours = now.diff(inputDate, "hour");

  if (diffInSeconds < 60) {
    return `${diffInSeconds} секундын өмнө`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} минутын өмнө`;
  } else if (diffInHours < 24) {
    return `${diffInHours} цагийн өмнө`;
  } else if (now.subtract(1, "day").isSame(inputDate, "day")) {
    return "Өчигдөр";
  } else {
    return inputDate.format("YYYY-MM-DD");
  }
};
