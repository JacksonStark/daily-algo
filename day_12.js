// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// If the number has leading zeros the amount of digits should be considered.

// For Example:

// foobar23 -> foobar24
// foo0042 -> foo0043
// foo099 -> foo100

function incrementString(str) {
  // split on first occurence (^) of digit (\d) and everything beyond that (+)
  let re = /([1-9]+)/
  let word = str.split(re)[0];
  let number = Number( str.split(re)[1] )

  return word + (number + 1);
}

console.log("RESULT ✅ |>  ", incrementString('foo099'))