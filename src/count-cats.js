const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;

  const kek = matrix.map((i) => {
    return i.filter((j) => j === "^^").length;
  });
  const res = kek.reduce((a, b) => a + b, 0);
  return res;
}

module.exports = {
  countCats,
};
