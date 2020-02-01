// Here is a data structure that represents a social network:

const socialMediaStructure = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// Implement a function biggestFollower() which returns the 
// name of the individual who follows the most people.
function biggestFollower(data) {
  let biggestFollower;
  let biggestFollowerAmount = 0

  Object.keys(data).map( (x) => {
    if (data[x].follows.length > biggestFollowerAmount) {
      biggestFollower = data[x].name
      biggestFollowerAmount = data[x].follows.length
    } 
  })

  return biggestFollower
}


// Implement mostPopular() which returns the name of the most 
// popular (most followed) individual.
function mostPopular(data) {
  let followed = {}
  let topPeople = [];
  
  // crafting obj of everyone and their followers
  Object.keys(data).map( x => {
    data[x].follows.map( y => {
      console.log(y)
      followed[y] ? followed[y] += 1 : followed[y] = 1
    })
  })

  let highestFollowers = Math.max(...Object.values(followed))
  let mostPopular = Object.entries(followed).filter(x => x[1] === highestFollowers)
  mostPopular.map( x => topPeople.push(data[x[0]].name))
  
  return topPeople.length === 1 ? topPeople[0] : topPeople
}
console.log("MOST POPULAR |> ", mostPopular(socialMediaStructure))

// Implement printAll() which outputs a list of everyone and for each
// of them, the names of who they follow and who follows them.
function printAll() {

}

// Implement unrequitedFollowers() which returns a list of names for 
// those who follow someone that doesn't follow them back.
function unrequitedFollowers() {

}

module.exports = {
  socialMediaStructure,
  biggestFollower,
  mostPopular,
  printAll,
  unrequitedFollowers
}
