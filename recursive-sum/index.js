/**
 * @param {number[]} array
 * @returns {number} Array sum.
 */
const recursiveSum = (array) => {
  if (array.length === 0) {
    return 0;
  }

  const [first, ...rest] = array;

  return first + recursiveSum(rest);
};

console.log(recursiveSum([]));
console.log(recursiveSum([5]));
console.log(recursiveSum([3, 5]));
console.log(recursiveSum([3, 5, 2, 4, 1]));
