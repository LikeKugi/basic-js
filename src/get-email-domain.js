const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(/* email */ email) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  const pattern = /@([a-z0-9-_]+\.[a-z]+)$/i;
  return email.match(pattern)[1];
}

module.exports = {
  getEmailDomain,
};
