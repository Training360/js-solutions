function getSumOfTheElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

function getAverageOfTheElements(arr) {
  return getSumOfTheElements(arr) / arr.length;
}

export {
  getSumOfTheElements,
  getAverageOfTheElements,
};
