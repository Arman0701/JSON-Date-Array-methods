'use strict'

Array.prototype.fakeFind = function(cb){
    for (let i=0; i<this.length; i++){
        if (cb(this[i])) return this[i];
    }
}

console.log([1,2,3,4,5,6,7,8].fakeFind(elem=>{ return elem>3 }));