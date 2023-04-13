const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/* names */ names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const namesMap = new Map();
  const out = [];
  names.forEach((el) => {
    if (namesMap.has(el)) {
      namesMap.set(el, namesMap.get(el) + 1);
      const name = `${el}(${namesMap.get(el)})`;
      out.push(`${el}(${namesMap.get(el)})`);
      namesMap.set(name, 0);
    } else {
      out.push(el);
      namesMap.set(el, 0);
    }
  });
  return out;
}

module.exports = {
  renameFiles,
};
