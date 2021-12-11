'use strict'

Array.prototype.fakeEvery = function(cb){
    for (let i=0; i<this.length; i++){
        if (!cb(this[i])) return false;
    }
    return true;
}

console.log([1,2,3,4,5,6,7,8].fakeEvery(elem => {
    return elem<15;
}));
console.log([1,2,3,4,5,6,7,8].fakeEvery(elem => {
    return elem>5;
}));