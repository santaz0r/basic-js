const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    !arguments.length
      ? this.arr.push("( )")
      : this.arr.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.arr.length ||
      typeof position !== "number" ||
      position % 1 !== 0
    ) {
      this.arr.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr = this.arr
      .map((i, index) => {
        return { value: i, index: index };
      })
      .sort((a, b) => {
        return b.index - a.index;
      })
      .map((i) => this.arr[i.index]);

    return this;
  },
  finishChain() {
    const res = this.arr.join("~~");
    this.arr.length = 0;
    return res;
  },
};

module.exports = {
  chainMaker,
};
