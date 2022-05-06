const countOfWorkingDays = (from, to) => {
  if (from - to > 0) {
    throw new Error('The first parameter is earlier date, than second!');
  }
  let counter = 0;
  for (let day = from; day <= to; day.setDate(day.getDate() + 1)) {
    if (day.getDay() > 0 && day.getDay() < 6) {
      counter += 1;
    }
  }
  return counter;
};

export default countOfWorkingDays;
