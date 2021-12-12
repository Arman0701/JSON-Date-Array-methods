'use strict'

Array.prototype.fakeShift = function (){
    let result = this[0];
    this.length--;
    return result;
}

let arr = [1,2,3,4,5];

console.log(arr.fakeShift());
console.log(arr.length);