// Write a function named first_non_repeating_letter that takes a 
// string input, and returns the first character that is not repeated 
// anywhere in the string.

// For example, if given the input 'stress', the function should return
// 't', since the letter t only occurs once in the string, and occurs 
// first in the string.

// As an added challenge, upper- and lowercase letters are considered 
// the same character, but the function should return the correct case 
// for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty 
// string ("") or None -- see sample tests.

const non_repeating = (string) => {
  let arrayString = string.toLowerCase().split('');
  let letterLookup = {}

  arrayString.forEach((x) => {
    if (letterLookup[x]) {
      letterLookup[x] = letterLookup[x] + 1;
    } else {
      letterLookup[x] = 1
    }
  })

  return Object.keys(letterLookup).find(x => letterLookup[x] === 1)
  // return Object.entries(letterLookup)
}

console.log(non_repeating('sTreSS'))