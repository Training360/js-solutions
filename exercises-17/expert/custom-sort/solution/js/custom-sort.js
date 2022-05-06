import bubbleSort from '../../../common/bubble-sort.js';

function getNumericValues(arr) {
  const numbersArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      numbersArr.push(arr[i]);
    }
  }
  return numbersArr;
}

function getNonNumericValues(arr) {
  const notNumbersArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== 'number') {
      notNumbersArr.push(arr[i]);
    }
  }
  return notNumbersArr;
}

function customSort(arr) {
  return bubbleSort(getNumericValues(arr)).concat(getNonNumericValues(arr));
}

export default customSort;
