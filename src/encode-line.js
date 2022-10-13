const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return "";
  let count = 1;
  let res = "";
  const kek = str.split("");
  while (kek.length) {
    const char = kek.shift();
    if (char === kek[0]) {
      count++;
    } else {
      res += `${count > 1 ? count : ""}${char}`;
      count = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine,
};
