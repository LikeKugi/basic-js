const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */ mtx) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  const out = [];
  for (let i = 0; i < mtx.length; i++) {
    out.push([]);
    for (let j = 0; j < mtx[i].length; j++) {
      const counter = [];

      if (mtx[i - 1]) {
        counter.push(mtx[i - 1][j - 1], mtx[i - 1][j], mtx[i - 1][j + 1]);
      }
      if (mtx[i + 1]) {
        counter.push(mtx[i + 1][j - 1], mtx[i + 1][j], mtx[i + 1][j + 1]);
      }
      counter.push(mtx[i][j - 1], mtx[i][j + 1]);
      // console.log(counter.filter(el => el).length)

      out[i].push(counter.filter((el) => el).length);
      console.log(out[i]);
    }
  }
  return out;
}

module.exports = {
  minesweeper,
};
