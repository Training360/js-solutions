function getSectionOfTwoArrays(arr1, arr2) {
  const section = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1.indexOf(arr2[i]) !== -1) {
      section.push(arr2[i]);
    }
  }
  return section;
}

export default getSectionOfTwoArrays;
