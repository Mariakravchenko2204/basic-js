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
function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const arr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      arr.push(0);
    }
    result.push(arr);
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let y = 0; y < matrix.length; y += 1) {
      let counter = 0;
      if (y > 0 && matrix[i][y - 1] === true) counter += 1;
      if (y < matrix.length - 1 && matrix[i][y + 1] === true) counter += 1;
      if (i > 0 && matrix[i - 1][y] === true) counter += 1;
      if (i < matrix.length - 1 && matrix[i + 1][y] === true) counter += 1;
      if (i > 0 && y < matrix.length - 1 && matrix[i - 1][y + 1] === true)
        counter += 1;
      if (y > 0 && i < matrix.length - 1 && matrix[i + 1][y - 1] === true)
        counter += 1;
      if (y > 0 && i > 0 && matrix[i - 1][y - 1] === true) counter += 1;
      if (
        y < matrix.length - 1 &&
        i < matrix.length - 1 &&
        matrix[i + 1][y + 1] === true
      )
        counter += 1;
      result[i][y] = counter;
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
