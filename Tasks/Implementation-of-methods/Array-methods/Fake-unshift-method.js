'use strict'

Array.prototype.fakeUnshift = function(...args){
    this.length += args.length;
    for (let i=0; i<this.length; i++){
        this[this.length-1-i] = this[this.length-1-args.length-i]
    }
    for (let i=0; i<args.length; i++){
        this[i] = args[i];
    }
    return this;
}

console.log([1,2,3,4,5,6,7,8,9].fakeUnshift(-5,-4,-3,-2,-1,0));
console.log([5,6,7,8,9].fakeUnshift(-5,-4,-3,-2,-1,0,1,2,3,4));
console.log([1,2,3,4,5].fakeUnshift(-5,'hello', true, null, undefined));