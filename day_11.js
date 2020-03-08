// Move the first letter of each word to the end of it, then add "ay"
// to the end of the word. Leave punctuation marks untouched.

// For Example:

// pigIt('Pig latin is cool');    // igPay atinlay siay oolcay
// pigIt('Hello world !');        // elloHay orldway !

function pigIt(str) {

  let splitSentence = str.split(' ');
  let result = splitSentence.map((word, index) => {
    let splitWord = word.split('');

    // add first character to end
    splitWord.push(splitWord[0]);

    // delete first character after adding it to end
    splitWord.shift();

    // check to not add 'ay' onto ending punctuation
    let ending = splitWord.length === 1 && index === splitSentence.length - 1 ? '' : 'ay';

    return splitWord.join('') + ending;
  });

  return result.join(' ');
}

console.log("RESULT ✅ |>  ", pigIt("Pig latin is a cool thing !"));

var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
