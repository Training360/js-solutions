function getTheSmallestElement(arr) {
  let smallestNumber = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}

export default getTheSmallestElement;
