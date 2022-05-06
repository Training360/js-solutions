function getUnionOfTwoArrays(arr1, arr2) {
  // return arr1.concat(arr2);
  const union = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (union.indexOf(arr1[i]) === -1) {
      union.push(arr1[i]);
    }
    if (union.indexOf(arr2[i]) === -1) {
      union.push(arr2[i]);
    }
  }
  return union;
}

export default getUnionOfTwoArrays;
