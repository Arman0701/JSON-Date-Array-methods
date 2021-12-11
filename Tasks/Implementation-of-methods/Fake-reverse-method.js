'use strict'

Array.prototype.fakeReverse = function(){
    let newArr = [];
    this.forEach(elem=>{newArr.unshift(elem)});
    return newArr;
}

console.log([1,2,3,4,5].fakeReverse());