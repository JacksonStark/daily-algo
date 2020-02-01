function instructorWithLongestName(instructors) {
  let lengthToBeat = 0 // used for comparision purposes
  let longestInstructor; // will be returned at the end

  instructors.map((x) => {
    if (x.name.length > lengthToBeat) {
      lengthToBeat = x.name.length;
      longestInstructor = x
    }
  })

  return longestInstructor;
}

const instructorsArray = [
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]

// console.log(instructors.reduce((top, cur) => {
//   if (!top) return cur
//   else if (cur.name.length > top.name.length) return cur
//   return top
// }, 0))

// console.log(instructors.reduce((t, c) => !t ? c : c.name.length > t.name.length ? c : t, 0))

console.log(instructorsArray.reduce((t, c) => !t ? c : c.name.length > t.name.length ? c : t, 0))

// console.log("LONGEST ✅ |>  ", instructorWithLongestName(instructors))