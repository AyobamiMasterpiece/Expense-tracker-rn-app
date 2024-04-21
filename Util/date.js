export const getDays = (today, days) => {
  console.log(today.year);
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - days
  );
};
export const getcurrentdate = (date) => {
  if (!date) {
    date = new Date();
  }
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `;
};
