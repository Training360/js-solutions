const objectConverter = {
  setToArray(set) {
    return Array.from(set);
  },
  setToMap(set) {
    return new Map(Array.from(set).map((item, index) => [index, item]));
  },
  mapToArray(map) {
    return [...map.values()];
  },
  arrayToMap(arr) {
    return new Map(arr.map((item, index) => [index, item]));
  },
  arrayToSet(arr) {
    return new Set(arr);
  },
  mapToSet(map) {
    return new Set([...map.values()]);
  },
};

export default objectConverter;
