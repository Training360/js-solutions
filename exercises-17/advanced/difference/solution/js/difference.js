function getTheDifferenceBetweenTwoArrays(arr1, arr2) {
  const difference = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.indexOf(arr1[i]) === -1) {
      difference.push(arr1[i]);
    }
  }
  return difference;
}

export default getTheDifferenceBetweenTwoArrays;
