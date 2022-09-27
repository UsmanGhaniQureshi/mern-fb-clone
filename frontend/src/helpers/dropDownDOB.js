export const dropDownDOB = (n) => {
  const days = [...Array(31).keys()].map((i) => i + 1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = createYearsArray();

  return {
    months,
    days,
    years,
  };
};

const createYearsArray = () => {
  const currentYear = new Date().getFullYear();
  const yearsArray = [];

  for (let y = 1903; y <= currentYear; y++) {
    yearsArray.push(y);
  }
  return yearsArray;
};
