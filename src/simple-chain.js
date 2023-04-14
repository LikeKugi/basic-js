const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(/* value */ value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(/* position */ pos) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof pos !== "number" || pos < 1 || pos > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(pos - 1, 1);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const out = this.chain.join("~~");
    this.chain = [];
    return out;
  },
};

module.exports = {
  chainMaker,
};
