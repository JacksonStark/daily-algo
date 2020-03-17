// Write an algorithm that takes an array and moves all of the
// zeros to the end, preserving the order of the other elements.

// For Example:

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {

  let zeroCount = [];

  let arranged = arr.filter(char => {
    
    if (char === 0) {
      zeroCount.push(0)
    } else {
      return char;
    }

  })

  return [ ...arranged, ...zeroCount ]

}

console.log('✅ RESULT |> ', moveZeros([false,1,0,1,2,0,1,3,"a"]));
