'use strict'

Array.prototype.fakePush = function(...args){
    for (let i=0; i<args.length; i++){
        this[this.length] = args[i];
    }
    return this;
}

console.log([1,2,3,4,5].fakePush(5,6,7,8,9));
console.log([1,2,3,4,5].fakePush(5,null,undefined,'hello',true));