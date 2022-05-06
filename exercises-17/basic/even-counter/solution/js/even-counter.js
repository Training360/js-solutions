function getCountOfTheEvenElements(arr) {
  let evenCounter = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      evenCounter += 1;
    }
  }
  return evenCounter;
}

export default getCountOfTheEvenElements;
