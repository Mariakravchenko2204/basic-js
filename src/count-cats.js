const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let counter = 0;
  const catEars = '^^';
  matrix.map(e => {
    e.map(e1 => {
      if (e1 === catEars) {
        counter += 1;
      }
    });
  });
  return counter;
}

module.exports = {
  countCats
};
