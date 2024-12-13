export const isFriday13th = (targetDate: Date): boolean => {
  const date = targetDate.getDate();
  const day = targetDate.getDay();
  return date === 13 && day === 5;
};
