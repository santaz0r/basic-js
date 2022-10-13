const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  try {
    if (!Array.isArray(arr))
      throw new Error(`'arr' parameter must be an instance of the Array!`);

    const kek = [...arr];

    for (let i = 0; i < kek.length; i++) {
      switch (kek[i]) {
        case "--discard-prev":
          if (kek[0] === "--discard-prev") return kek.splice(1, kek.length - 1);

          kek.splice(i - 1, 2);

          break;
        case "--double-next":
          if (kek[kek.length - 1] === "--double-next")
            return kek.splice(0, kek.length - 1);
          kek[i] = kek[i + 1];
          break;
        case "--double-prev":
          if (kek[0] === "--double-prev") return kek.splice(1, kek.length - 1);
          kek[i] = kek[i - 1];
          break;
        case "--discard-next":
          if (kek[kek.length - 1] === "--discard-next")
            return kek.splice(0, kek.length - 1);
          if (kek[i + 2] === "--double-prev") {
            kek.splice(i, 1);
          }
          if (kek[i + 2] === "--discard-prev") {
            kek.splice(i, 1);
          }
          kek.splice(i, 2);
          break;
      }
    }
    return kek;
  } catch (error) {
    throw Error(error.message);
  }
}

module.exports = {
  transform,
};
