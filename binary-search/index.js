/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const divideToInteger = (a, b) => Math.trunc(a / b);

/**
 * @param {number[]} array
 * @param {number} value
 * @returns {(number|null)} value index.
 */
const binarySearch = (array, value) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = divideToInteger(start + end, 2);
    const guess = array[mid];

    if (guess === value) {
      return mid;
    }

    if (value > guess) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return null;
};

console.log(binarySearch([], 5)); // null
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 4
console.log(binarySearch([1, 2, 3, 7, 8, 9], 5)); // null
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([5, 6, 7, 8, 9], 5)); // 0
