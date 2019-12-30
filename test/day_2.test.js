const assert = require("chai").assert;
const equalSidesOfArray = require("../day_2.js");


describe("Equal Sides of Array", () => {
  it("should return 6 for [1,2,3,6,3,2,1]", () => {
    assert.equal(equalSidesOfArray([1,2,3,6,3,2,1]), 6)
  })

  it("should return 1 for [1,100,50,-51,1,1]", () => {
    assert.equal(equalSidesOfArray([22,27,51,100,33,14,53]), 100)
  })

  it("should return -1 for [1,2,3,4,5,6]", () => {
    assert.equal(equalSidesOfArray([1,2,3,4,5,6]), -1)
  })

  it("should return 3 for [20,10,30,10,10,15,35]", () => {
    assert.equal(equalSidesOfArray([22,611,-300,333,44,711,-422]), 333)
  })
})