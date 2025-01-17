/**
 * @param {number[]} array
 * @param {number} start Starting index.
 * @returns {number} Returns index of smallest value.
 */
const findSmallestIndex = (array, start = 0) => {
  let smallestValue = array[start];
  let smallestValueIndex = start;

  for (let i = start; i < array.length; ++i) {
    const currentValue = array[i];

    if (currentValue < smallestValue) {
      smallestValue = currentValue;
      smallestValueIndex = i;
    }
  }

  return smallestValueIndex;
};

/**
 * @param {number[]} result An array to sort.
 * @returns {number[]} Sorted array.
 */
const selectionSort = (array) => {
  const result = [...array];

  for (let i = 0; i < result.length; ++i) {
    let currentValue = result[i];

    let smallestValueIndex = findSmallestIndex(result, i);
    let smallestValue = result[smallestValueIndex];

    result[i] = smallestValue;
    result[smallestValueIndex] = currentValue;
  }

  return result;
};

console.log(selectionSort([1, 2, 3, 4, 5, 6]));
console.log(selectionSort([2, 5, 2, 8, 0, 4, 3, 4, 5]));
