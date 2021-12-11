'use strict'

Array.prototype.fakeSlice = function(start, size){
    let newArr = [];
    size = size === undefined ? this.length : size;
    for (let i=0; i<this.length; i++){
        if (i>=start && size > 0) {
            newArr.push(this[i]);
            size--;
        }
    }
    return newArr;
}

console.log([1,2,3,4,5,6,7,8].fakeSlice(3));
console.log([1,2,3,4,5,6,7,8].fakeSlice(3, 2));
console.log([1,2,3,4,5,6,7,8].fakeSlice(3, 0)); 