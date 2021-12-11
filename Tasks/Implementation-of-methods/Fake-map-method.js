'use strict'

Array.prototype.fakeMap = function(cb){
    let newArr = [];
    this.forEach(elem => {
        newArr.push(cb(elem));
    });
    return newArr;
}

console.log([1,2,3,4,5,6].fakeMap(elem => {
    return elem+2;
}));
console.log([1,2,3,4,5,6].fakeMap(elem => {
    return elem*2;
}));
console.log([1,2,3,4,5,6].fakeMap(elem => {
    return elem+'2';
}));