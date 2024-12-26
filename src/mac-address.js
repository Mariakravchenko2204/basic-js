const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const regex = /[0-9A-F]/g;
  let res = false;
  const nArr = n.split("-");
  for (let i = 0; i < nArr.length; i += 1) {
    if(nArr[i].length !== 2) {
      res = false;
      break;
    }
    const match = nArr[i].match(regex);
    if (match.length === 2) {
      res = true;
    } else {
      res = false;
      break;
    }
  }
  return res;
}
module.exports = {
  isMAC48Address,
};
