'use strict'

// Given an array, return the sum of numbers that are 18 or over.

function sumOfAges(arr){
    if (!(arr instanceof Array)) return
    return arr.reduce(elem => {
        return 
    })
}

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

console.log(sumOfAges(arr)); // 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347