'use strict'

// Given an array, return a new array that only includes the numbers.

function filtering(arr){
    if (!(arr instanceof Array)) return
    return arr.filter(elem => {
        if (typeof elem === 'number' && !isNaN(elem)) return elem;
    });
}

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN];

console.log(filtering(arr)); // [1, 2, 55, 166]