const assert = require('chai').assert;
const {
  socialMediaStructure,
  biggestFollower,
  mostPopular,
  printAll,
  unrequitedFollowers 
} = require('../day_7.js');


describe(`Biggest Follower`, () => {
  it(`should return the name of the individual who follows the most people`, () => {
    assert.equal(biggestFollower(socialMediaStructure), "Debbie")
  })
})

describe(`Most Popular`, () => {
  it(`should return the name of the most popular (most followed) individual`, () => {
    assert.deepEqual(mostPopular(socialMediaStructure), [ 'Debbie', 'Elizabeth', 'Finn' ])
  })
})

describe(`Print All`, () => {
  it(`should return a list of everyone and for each of them, the names of who 
      they follow and who follows them.`, () => {
    assert.equal(printAll(socialMediaStructure), 6)
  })
})

describe(`Unrequited Followers`, () => {
  it(`should return a list of names for those who follow someone that doesn't 
      follow them back.`, () => {
    assert.equal(unrequitedFollowers(socialMediaStructure), 6)
  })
})
