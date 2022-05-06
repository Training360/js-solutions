const sortStrings = (arr) => new Promise((resolve, reject) => {
  try {
    const everyElementIsString = arr.every((item) => typeof item === 'string');
    if (everyElementIsString) {
      resolve(arr.sort());
    }
    reject(new Error('Error: Not all items in the array are strings!'));
  } catch (error) {
    reject(new Error('Error: Something went wrong with sorting words!'));
  }
});

export default sortStrings;
