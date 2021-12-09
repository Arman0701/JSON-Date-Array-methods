'use strict'

// Given an array, return the sum of numbers that are 18 or over.

function sumOfAges(arr){
    if (!(arr instanceof Array)) return
    return arr.filter(elem => {return elem >= 18}).reduce((a,b) => {return a+b});
}

const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];

console.log(sumOfAges(arr)); // 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347