'use strict'

Array.prototype.fakeFindIndex = function(cb){
    for (let i=0; i<this.length; i++){
        if (cb(this[i])) { return i }
    }
    return -1
}

console.log( [1,2,3,4,5].fakeFindIndex(elem => {return elem>3}) );