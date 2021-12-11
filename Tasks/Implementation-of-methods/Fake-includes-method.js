'use strict'

Array.prototype.fakeIncludes = function(value){
    for (let i=0; i<this.length; i++){
        if (this[i] === value) return true;
    }
    return false;
}

console.log([1,2,3,4,5].fakeIncludes(2));