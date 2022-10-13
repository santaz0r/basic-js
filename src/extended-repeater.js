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
  const {
    repeatTimes,
    separator,
    addition,
    additionSeparator,
    additionRepeatTimes,
  } = options;
  const repeat = repeatTimes ? repeatTimes : 1;
  const additionRepeat = additionRepeatTimes ? additionRepeatTimes : 1;
  const add = addition !== undefined ? String(addition) : "";
  const arr = [];
  const addArr = [];
  let string = "";

  for (let i = 0; i < additionRepeat; i++) {
    addArr.push(add.toString());
  }
  string =
    String(str) + addArr.join(additionSeparator ? additionSeparator : "|");
  for (let i = 0; i < repeat; i++) {
    arr.push(string);
  }
  console.log(repeat);
  return arr.join(separator ? separator : "+");
}

module.exports = {
  repeater,
};
