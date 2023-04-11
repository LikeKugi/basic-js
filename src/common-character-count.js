const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */ s1, s2) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  if (!s1 || !s2) return 0;
  const chars = {};
  for (const char of s1) {
    if (chars[char]) {
      chars[char] += 1;
    } else {
      chars[char] = 1;
    }
  }
  let common = 0;
  for (const char of s2) {
    if (chars[char]) {
      common += 1;
      chars[char] -= 1;
    }
  }
  return common;
}

module.exports = {
  getCommonCharacterCount,
};
