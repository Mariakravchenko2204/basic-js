const { NotImplementedError } = require('../extensions/index.js');

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
function renameFiles(names) {
  const nameObj = {};
  for (let i = 0; i < names.length; i += 1) {
    if (!nameObj.hasOwnProperty(names[i])) {
      nameObj[names[i]] = 0;
    }
  }
  for (let y = 0; y < names.length; y += 1) {
    if (nameObj[names[y]] === 0) {
      nameObj[names[y]] += 1;
    } else {
      const name = names[y];
      names[y] += `(${nameObj[names[y]]})`;
      nameObj[name] += 1;
      if (nameObj.hasOwnProperty(`${names[y]}`)) {
        nameObj[`${names[y]}`] += 1;
      }
    }
  }
  return names;
}

module.exports = {
  renameFiles
};
