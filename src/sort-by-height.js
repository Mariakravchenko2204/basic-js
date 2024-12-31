const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];
  const cleanArr = [];
  arr.map((e, index) => {
    if (e === -1){
      indexes.push(index);
    } else {
      cleanArr.push(e);
    }
  });
  cleanArr.sort((a, b) => a - b)
  indexes.map(e => {
    cleanArr.splice(e, 0, -1)
  })
  return cleanArr;
}

module.exports = {
  sortByHeight
};
