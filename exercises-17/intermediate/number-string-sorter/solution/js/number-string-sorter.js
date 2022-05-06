function getNumericValues(arr) {
  const numbers = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      numbers.push(arr[i]);
    }
  }
  return numbers;
}

function getStringValues(arr) {
  const strings = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'string') {
      strings.push(arr[i]);
    }
  }
  return strings;
}

function numberAndStringSorter(arr) {
  const numbers = getNumericValues(arr);
  const strings = getStringValues(arr);
  const sortedArr = [];
  for (let i = 0; i < numbers.length; i += 1) {
    sortedArr.push(numbers[i], strings[i]);
  }
  return sortedArr;
}

export default numberAndStringSorter;
