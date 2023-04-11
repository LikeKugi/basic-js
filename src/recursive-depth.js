const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/* arr */ arr, currentDepth = 0, maxDepth = 0) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!Array.isArray(arr)) return currentDepth;

    currentDepth += 1;
    if (currentDepth > maxDepth) maxDepth += 1;

    if (arr.length === 0) {
      return maxDepth > currentDepth ? maxDepth : currentDepth;
    }

    for (const el of arr) {
      if (Array.isArray(el)) {
        const depth = this.calculateDepth(el, currentDepth, maxDepth);
        maxDepth = depth > maxDepth ? depth : maxDepth;
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
