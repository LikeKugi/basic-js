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
function repeater(
  /* str, options */ str,
  {
    repeatTimes,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  }
) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  str = String(str);
  addition = String(addition);

  const out = [...Array(repeatTimes)].map((el) => {
    const add = [...Array(additionRepeatTimes)].map((el) => (el = addition));
    el = str + add.join(additionSeparator);
    return el;
  });
  return out.join(separator);
}

module.exports = {
  repeater,
};
