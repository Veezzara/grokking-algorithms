/**
 * @param {number} a
 * @param {number} b
 * @returns {number[]} Returns a pair of numbers as a sorted array (in an ascending order).
 */
const swapToAsc = (a, b) => {
  if (b < a) {
    return [b, a];
  }

  return [a, b];
};

/**
 * @param {number} a
 * @param {number} b
 * @returns {number} Greatest common divisor.
 */
const greatestCommonDivisor = (a, b) => {
  const [c, d] = swapToAsc(a, b);
  const remainder = d % c;

  if (remainder === 0) {
    return c;
  }

  return greatestCommonDivisor(c, remainder);
};

console.log(greatestCommonDivisor(1680, 640));
console.log(greatestCommonDivisor(640, 1680));
