import { isFriday13th } from "./isFriday13th.ts";

export const getNextFriday13th = (fromDate?: Date): Date => {
  if (fromDate === undefined) fromDate = new Date();

  if (isFriday13th(fromDate)) {
    const tomorrowOfFromDate = new Date(fromDate);
    tomorrowOfFromDate.setDate(fromDate.getDate() + 1);
    return getNextFriday13th(tomorrowOfFromDate);
  }

  let currentMonth13th = new Date(
    fromDate.getFullYear(),
    fromDate.getMonth(),
    13,
  );

  if (
    fromDate.getDate() > 13 ||
    (fromDate.getDate() === 13 && currentMonth13th.getDay() !== 5)
  ) {
    const nextMonth = fromDate.getMonth() + 1;
    const nextYear = nextMonth > 11
      ? fromDate.getFullYear() + 1
      : fromDate.getFullYear();
    currentMonth13th = new Date(nextYear, nextMonth % 12, 13);
  }

  while (currentMonth13th.getDay() !== 5) {
    const nextMonth = currentMonth13th.getMonth() + 1;
    const nextYear = nextMonth > 11
      ? currentMonth13th.getFullYear() + 1
      : currentMonth13th.getFullYear();
    currentMonth13th = new Date(nextYear, nextMonth % 12, 13);
  }

  return currentMonth13th;
};

export const getRandomFriday13th = (): Date => {
  const dateMinimum = new Date("0001-01-01T00:00:00.000Z").getTime();
  const dateMaximum = new Date("9999-12-31T23:59:59.999Z").getTime();
  const randomTime = Math.random() * (dateMaximum - dateMinimum) + dateMinimum;
  const randomDate = new Date(randomTime);
  return getNextFriday13th(randomDate);
};
