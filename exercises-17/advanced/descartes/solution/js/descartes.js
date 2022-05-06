function getCartesianProductOfTwoArrays(arr1, arr2) {
  const descartes = [];
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      descartes.push([arr1[i], arr2[j]]);
    }
  }
  return descartes;
}

export default getCartesianProductOfTwoArrays;
