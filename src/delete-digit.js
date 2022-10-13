const { NotImplementedError } = require("../extensions/index.js");

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
  const num = n.toString().split("");
  let max = 0;

  for (let i = 0; i < num.length; i++) {
    const num = n.toString().split("");
    const deletedNum = num.splice(i, 1);
    let res = +num.join("");
    num[i] = deletedNum;
    max < res ? (max = res) : max;
  }

  return max;
}

module.exports = {
  deleteDigit,
};
