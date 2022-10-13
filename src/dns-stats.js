const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {};
  const obj = {};
  let str = "";

  domains.map((i) =>
    i
      .split(".")
      .reverse()
      .forEach((i, index) => {
        index === 0 ? (str = `.${i}`) : (str += `.${i}`);
        obj[str] ? (obj[str] += 1) : (obj[str] = 1);
      })
  );
  return obj;
}

module.exports = {
  getDNSStats,
};
