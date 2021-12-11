'use strict'

Array.prototype.fakeConcat = function(value){
    return [...this, ...value];
}

console.log([1,2,3].fakeConcat([4,5,6]));