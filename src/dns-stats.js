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
function getDNSStats(/* domains */ domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const domains_address = domains.map((el) => el.split(".").reverse());
  const out = {};
  for (const domain of domains_address) {
    for (let i = 0; i < domain.length; i++) {
      const key = ".".concat(domain.slice(0, i + 1).join("."));
      out[key] ? (out[key] += 1) : (out[key] = 1);
    }
  }
  return out;
}

module.exports = {
  getDNSStats,
};
