const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const firstStringArray = s1.split('');
  let counter = 0;
  s2.split('').map(e => {
    if (firstStringArray.indexOf(e) !== -1) {
      counter += 1;
      firstStringArray.splice(firstStringArray.indexOf(e), 1);
    }
  });
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
