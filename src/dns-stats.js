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
  const listOfDomains = [];
  const domainsObject = {};
  domains.map((e) => {
    const domainArray = e.split(".").reverse();
    for (let i = 0; i < domainArray.length; i += 1) {
      let domain = "";
      for (let y = 0; y < i + 1; y += 1) {
        domain += "." + domainArray[y];
      }
      listOfDomains.push(domain);
    }
  });
  listOfDomains.map(e => {
    if(!domainsObject.hasOwnProperty(e)) {
      domainsObject[e] = 1;
    } else {
      domainsObject[e] += 1;
    }
  });
  return domainsObject;
}

module.exports = {
  getDNSStats,
};
