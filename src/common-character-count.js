const { NotImplementedError } = require("../extensions/index.js");

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
  const uniq1 = s1.split("").reduce((a, b) => {
    a[b] = a[b] ? a[b] + 1 : 1;
    return a;
  }, {});
  const uniq2 = s2.split("").reduce((a, b) => {
    a[b] = a[b] ? a[b] + 1 : 1;
    return a;
  }, {});

  let res = 0;

  for (let key in uniq1) {
    let key1 = uniq1[key] ? uniq1[key] : 0;
    let key2 = uniq2[key] ? uniq2[key] : 0;
    res += Math.min(key1, key2);
  }

  return res;
}

module.exports = {
  getCommonCharacterCount,
};
