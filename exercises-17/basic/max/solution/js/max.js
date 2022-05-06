function getTheLargestElement(arr) {
  let largestNumber = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

export default getTheLargestElement;
