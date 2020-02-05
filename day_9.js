// Lyrics...
// Pyramids are amazing! Both in architectural and mathematical sense. 
// If you have a computer, you can mess with pyramids even if you are not in 
// Egypt at the time. For example, let's consider the following problem. Imagine 
// that you have a pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4 
//  2 \4\ 6 
// 8 5 \9\ 3

// Here comes the task...
// Let's say that the 'slide down' is a sum of consecutive numbers from the top 
// to the bottom of the pyramid. As you can see, the longest 'slide down' is 
// 3 + 7 + 4 + 9 = 23

// Your task is to write a function longestSlideDown (in ruby: longest_slide_down) 
// that takes a pyramid representation as argument and returns its' longest 'slide 
// down'. For example,

// longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) => 23

function longestSlideDown(pyramid, index = 0, sum = 0) {

  //  console.log({sum})
  
  // console.log(pyramid[0][index])
  // console.log({cutPyramid})
  sum += pyramid[0][index]
  let cutPyramid = pyramid.slice(index + 1)
  console.log({cutPyramid, sum})
  
  if (cutPyramid.length > 1) {
    let leftSum = sum + cutPyramid[0][index]
    let rightSum = sum + cutPyramid[0][index + 1]
    return Math.max(
      longestSlideDown(cutPyramid, index, leftSum),
      longestSlideDown(cutPyramid, index + 1, rightSum)
    )
  }
  
  if (cutPyramid.length === 1) {
    console.log(cutPyramid[0][index])
    return Math.max(cutPyramid[0][index], cutPyramid[0][index + 1]) + sum
  }

  // console.log(sum)
  // console.log("diff", Math.max(
  //   longestSlideDown(cutPyramid, index, newSum),
  //   longestSlideDown(cutPyramid, index++, newSum)
  // ))




  // return pyramid.reduce((acc, cur) => {
  //   // if we're at the top of the pyramid, add cur's only value to sum
  //   console.log(acc)
    
  //   cur.length === 1 ? acc.sum += cur[0] : null

    
  //   if (cur.length > 1) {
  //     let left = cur[acc.index] // 8
  //     let right = cur[acc.index + 1] // 6

      
  //     let max = Math.max(left, right) // 8
  //     // 8 
  //     if (max === left) {
  //       // index stays the same
  //       acc.sum += left
  //     } else {
  //       acc.index += 1;
  //       acc.sum += right
  //     }

  //     // pass it current  pyramid index && sum
  //     let cutPyramid = pyramid.splice(0, cur + 1) 
  //     Math.max(longestSlideDown(cutPyramid, acc.index, acc.sum), )

  //   }
  //   return acc
  // }, {index: index, sum: sum})
}

console.log("TOTAL ✅ |>  ", longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]))