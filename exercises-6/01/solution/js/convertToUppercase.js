const convertToUppercase = (arr) => new Promise((resolve, reject) => {
  try {
    const uppercaseStringsArray = arr.map((str) => str.toLocaleUpperCase());
    resolve(uppercaseStringsArray);
  } catch (error) {
    reject(new Error('Error: Not all items in the array are strings!'));
  }
});

export default convertToUppercase;
