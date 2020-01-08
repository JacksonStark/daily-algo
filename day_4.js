// Write a function that will find all the anagrams of a word from a list. 
// You will be given two inputs a word and an array with words. You should 
// return an array of all the anagrams or an empty array if there are none. 

// For example:
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']



function anagrams(word, words) {

  matchingWords = [];
  
  let splitWord1 = word.split('').sort();
  
  words.map((word) => {
    let splitWord2 = word.split('').sort();

    if (equalArray(splitWord1, splitWord2)) {
      matchingWords.push(word)
    }
  });
  
  return matchingWords;
  
  }

  function equalArray(array1, array2) {
    if (array1.length !== array2.length) {
      return false
    };

    for (const [ i ] of array1.entries()) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    };

    return true;
  }

  console.log("FINAL RESULT |>  ", anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))