const getSecondsOfThisYearUntilNow = () =>
  (Date.now() - new Date(new Date().getFullYear(), 0, 1)) / 1000;

export default getSecondsOfThisYearUntilNow;
