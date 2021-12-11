'use strict'

Array.prototype.fakeForEach = function(cb){
    for(let i=0; i<this.length; i++){
        cb(this[i]);
    }
}

console.log([1,2,3,4,5,6,7,8].fakeForEach(elem => {
    console.log(elem);
}));