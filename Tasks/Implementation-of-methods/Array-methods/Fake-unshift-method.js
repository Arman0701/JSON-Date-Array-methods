'use strict'

Array.prototype.fakeUnshift = function(...args){
    for (let i=0; i<this.length; i++){
        args[args.length] = this[i];
    }    
    return args;
}

console.log([1,2,3,4,5].fakeUnshift(-5,-4,-3,-2,-1,0));
console.log([1,2,3,4,5].fakeUnshift(-5,'hello', true, null, undefined));