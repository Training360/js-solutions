import bubbleSort from '../../../common/bubble-sort.js';

function inputNumericData() {
  let number;
  // eslint-disable-next-line no-alert
  do { number = parseInt(prompt('Adj meg egy számot'), 10); }
  while (!Number.isInteger(number));
  return number;
}

function insertionSort(arr) {
  const sortedArr = bubbleSort(arr);
  const number = inputNumericData();
  for (let i = 0; i < sortedArr.length; i += 1) {
    if (sortedArr[i] > number) {
      sortedArr.splice(i, 0, number);
      return sortedArr;
    }
  }
  sortedArr.push(number);
  return sortedArr;
}

export default insertionSort;
