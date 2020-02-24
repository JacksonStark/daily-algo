// Write a function called sumIntervals/sum_intervals() that accepts an array 
// of intervals, and returns the sum of all the interval lengths. Overlapping 
// intervals should only be counted once.

// For Example:

// sumIntervals([
//  [1,7],
//  [5, 10],
//  [11, 15]
//  ]); // => 13

const sumIntervals = (intervals) => {

  let sortedIntervals = intervals.sort((a,b) => a[0] - b[0])

  let result = sortedIntervals.reduce((acc, cur) => {
    // if acc is empty, push our first interval
    if (acc.length === 0) {
      acc.push(cur)
      
    } else {
      let stackChanged = false
      acc.map((range, index) => {
        if (range[0] <= cur[0] && cur[0] <= range[1]) {
          // check if current interval is within the bounds of ANY of other intervals
          if (cur[1] >= range[1]) {
            // if thats the case, make sure current interval extends past related interval
            acc[index][1] = cur[1]
          }
          stackChanged = true
          return acc
        }
      })

      if (stackChanged === false) {
        acc.push(cur)
      }
    }

    return acc
  }, [])

  let compress = result.reduce((acc, cur) => acc + (cur[1] - cur[0]), 0)

  return compress;
}

console.log("✅ RESULT |>  ", sumIntervals(
  [ [ 1, 5 ], [ 10, 20 ], [ 1, 6 ], [ 16, 19 ], [ 5, 11 ] ]
))
