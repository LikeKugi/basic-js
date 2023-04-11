const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */ n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let max = -1;
  nDigits = String(n)
    .split("")
    .map((el) => +el);
  for (let i = 0; i < nDigits.length; i++) {
    const tmp = +[...nDigits.slice(0, i), ...nDigits.slice(i + 1)].join("");
    if (tmp > max) max = tmp;
  }
  return max;
}

module.exports = {
  deleteDigit,
};
