import bubbleSort from '../../../common/bubble-sort.js';

function getNthLargestElement(arr, nth) {
  return bubbleSort(arr)[arr.length - nth] || null;
}

export default getNthLargestElement;
