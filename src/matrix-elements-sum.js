const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let y = 0; y < matrix[i].length; y += 1) {
      if (i === 0) {
        sum += matrix[i][y];
      } else {
        let hasZero = false;
        for (let x = 0; x < i; x += 1) {
          if (matrix[x][y] === 0){
            hasZero = true;
            break;
          }
        }
        if (!hasZero) {
          sum += matrix[i][y]
        }
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
