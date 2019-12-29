const assert = require("chai").assert;
const humanReadable = require("../day_1.js");


describe("Human Readable Time", () => {
  it("should return a MAX time of 99:59:59 for 400000s", () => {
    assert.equal(humanReadable(400000), "99:59:59")
  })

  it("should return 08:20:33 for 30033s", () => {
    assert.equal(humanReadable(30033), "08:20:33")
  })

  it("should return 77:29:54 for 278994s", () => {
    assert.equal(humanReadable(278994), "77:29:54")
  })
})