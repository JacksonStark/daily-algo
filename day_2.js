// You are going to be given an array of integers. Your job is to take
// that array and find an index N where the sum of the integers to the
// left of N is equal to the sum of the integers to the right of N. If 
// there is no index that would make this happen, return -1.

// [1,2,3,4,3,2,1] = 4
// [1,2,3,4,5,6,7] = -1

function equalSidesOfArray(arr) {
  let leftTotal = 0;
  let rightTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    leftTotal += arr[i];

    for(let j = i+2; j < arr.length; j++) {
      rightTotal += arr[j];
      
      if(arr[i+1] === leftTotal && arr[i+1] === rightTotal) {
        return arr[i+1]
      }
    }
    rightTotal = 0
  }
  return -1
}

module.exports = equalSidesOfArray

console.log("RESULT |>  ", equalSidesOfArray([1,2,3,4,1,4,2,3,2,1]))