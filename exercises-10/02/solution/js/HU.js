const HU = {
  date(date) {
    return Intl.DateTimeFormat('hu-HU').format(date);
  },
  currency(number) {
    return Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(number);
  },
  list(arr) {
    const lastItem = ` és ${arr[arr.length - 1]}`;
    const splittedArr = arr.splice(0, arr.length - 1);
    return splittedArr.join(', ') + lastItem;
  },
};

export default HU;
