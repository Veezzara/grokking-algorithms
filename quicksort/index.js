/**
 * @param {number[]} array
 * @returns {number[]}
 */
const quicksort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];

  const less = array.filter((item) => item < pivot);
  const greater = array.filter((item) => item > pivot);

  return [...quicksort(less), pivot, ...quicksort(greater)];
};

console.log(quicksort([5, 3, 2, 7, 8, 3, 32, 765, 23, 12, 71, 62]));
