'use strict'

// - Create a function that takes an array of numbers arr, a string str
//   and return an array of numbers as per the following rules:
// - "Asc" returns a sorted array in ascending order.
// - "Desc" returns a sorted array in descending order.

function sortBy(arr, by){
    if (!(arr instanceof Array) || typeof by !== 'string') return
    if (by === "Asc") return arr.sort((a,b) => {return a-b});
    if (by === "Desc") return arr.sort((a,b) => {return b-a});
    else return "Invalid argument";
}

console.log(sortBy([4, 3, 2, 1], "Asc" )); // [1, 2, 3, 4]
console.log(sortBy([7, 8, 11, 66], "Desc")); // [66, 11, 8, 7]