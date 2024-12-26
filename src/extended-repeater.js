const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeat = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : "+";
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : false;
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let result = "";
  for (let i = 0; i < repeat; i += 1) {
    result += str;
    if (addition) {
      for (let y = 0; y < additionRepeatTimes; y += 1) {
        if (y === additionRepeatTimes - 1) {
          result += addition;
        } else {
          result += addition + additionSeparator;
        }
      }
      
    }
    if (i !== repeat - 1) {
      result += separator;
    }
  }
  return result;
}

module.exports = {
  repeater,
};
