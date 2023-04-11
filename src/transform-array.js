const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(/* arr */ inputArr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(inputArr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (inputArr.length === 0) return inputArr;
  const arr = [...inputArr];
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    switch (el) {
      case "--discard-next":
        if (arr[i + 1]) {
          delete arr[i + 1];
          i += 1;
        }
        break;
      case "--discard-prev":
        if (arr[i - 1]) {
          delete arr[i - 1];
          out.pop();
        }
        break;
      case "--double-next":
        if (arr[i + 1]) {
          out.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (arr[i - 1]) {
          out.push(out[out.length - 1]);
        }
        break;
      default:
        out.push(el);
    }
  }
  return out;
}

module.exports = {
  transform,
};
