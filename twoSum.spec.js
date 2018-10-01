const { expect } = require("chai");
const twoSum = require("./twosum");

describe("twosum", () => {
  it("Returns empty array if empty array was provided", () => {
    expect(twoSum([], 10).length).to.equal(0);
  });
  it("Returns two distinct elements that add up to the specified target", () => {
    expect(twoSum([1, 2, 3], 5)).to.equal([1, 2]);
  });
});
