const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });

  it("Returns a string with line breaks that cut the lines such that no line is longer than the column number given", () => {
    expect(
      wrap(
        "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.",
        20
      )
    ).to.equal(
      "Lorem ipsum dolor\n sit eu amet, elit na\n magna sem amet nulla\n vel purus ac ligula."
    );
  });

  it("Returns the same string if the length given is bigger than the line's length", () => {
    expect(wrap("hello world", 40)).to.equal("hello world");
  });
  it("Throws an error if the inputs are invalid", () => {
    expect(wrap([], NaN)).to.equal("Invalid inputs");
  });
});
