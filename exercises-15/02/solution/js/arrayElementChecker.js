const isANumber = (item) => typeof item === 'number';

const arrayElementChecker = (arr, searchValue) => ({
  exists: arr.includes(searchValue),
  index: arr.indexOf(searchValue),
  allElementsAreNumber: arr.every(isANumber),
  someElemensAreNumber: arr.some(isANumber),
});

export default arrayElementChecker;
