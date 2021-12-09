'use strict'

// Concatenate the two arrays

function concatenate(arr1, arr2){
    if (!(arr1 instanceof Array && arr2 instanceof Array)) return
    return [...arr1, ...arr2];
}

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8,9];
console.log(concatenate(arr1, arr2));