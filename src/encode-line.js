const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */ str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!str) return str;
  let currentChar = str[0];
  let counter = 0;
  let out = [];
  for (const char of str) {
    if (char === currentChar) {
      counter += 1;
    } else {
      out.push(`${counter > 1 ? counter : ""}${currentChar}`);
      currentChar = char;
      counter = 1;
    }
  }
  out.push(`${counter > 1 ? counter : ""}${currentChar}`);
  return out.join("");
}

module.exports = {
  encodeLine,
};
