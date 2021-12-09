'use strict'

// Write a function which parses string integers. If it's not possible to
// parse, then add null

function parseInteger(arr){
    if (!(arr instanceof Array)) return 
    return arr.map(elem => {
        return isNaN(elem) ? null : elem;
    })
}

console.log(parseInteger(["1", "2", "34"])); // [1, 2, 34];
console.log(parseInteger(["1", "px", "2323"])); // [1, null, 2323];