function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

export default linearSearch;
