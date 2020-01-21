// Write a function cakes(), which takes the recipe (object) and the
// available ingredients (also an object) and returns the maximum number 
// of cakes Pete can bake (integer). For simplicity there are no units 
// for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or
// 200). Ingredients that are not present in the objects, can be considered as 0.

// For example:

// cakes(
// {flour: 500, sugar: 200, eggs: 1}, 
// {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
// ) 

// returns 2


function cakes(recipe, supplied, count = 0) {
  let available = {...supplied}
  console.log(available)
  
  for (const key in recipe) {
//     if (!available[key]) { //  item doesnt exist, then STOP
//       return count;
//     } else {
      available[key] -= recipe[key] //  reduce available amount
//     }
  }
  
  if (!Object.values(available).every(v => v > 0)) { //  if all available food items are above 0, recurse
    return count
  }
  
  console.log(count)
  
  return cakes(recipe, available, count + 1)
}

console.log("OUTPUT |>  ", cakes({"flour":500,"sugar":200,"eggs":1}, {"flour":1200,"sugar":1200,"eggs":5,"milk":200}))


// iterate over recipe items
// each time taking away from available items amount
// after taking away one full round of items, if none
//   of the available items are 0, increase count by 1 && 
//   recursively pass the recipe and the available amount back.