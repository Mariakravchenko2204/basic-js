const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  const digitArray = String(n).split('').map(e => parseInt(e, 10))
  for (let i = 0; i < digitArray.length - 1; i += 1) {
    if(digitArray[i] < digitArray[i + 1]){
      digitArray.splice(i, 1);
      break;
    } else if (
      i + 1 === digitArray.length - 1 && digitArray[i + 1] === 0
    ) {
      digitArray.splice(i + 1, 1);
    }
  }
  return parseInt(digitArray.join(''), 10);
}

module.exports = {
  deleteDigit
};
