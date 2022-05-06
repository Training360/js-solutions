import bubbleSort from '../../../common/bubble-sort.js';

function getNthSmallestElement(arr, nth) {
  return bubbleSort(arr)[nth - 1] || null;
}

export default getNthSmallestElement;
