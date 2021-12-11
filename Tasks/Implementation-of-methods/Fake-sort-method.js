'use strict'

Array.prototype.fakeSort = function(cb){
    for(let i = 0; i < this.length; i++){
        for(let j = 0; j <= this.length - i; j++){
            if(cb(this[j + 1], this[j])){
                [this[j + 1],this[j]] = [this[j],this[j + 1]]
            }
        }
    };
    return this;
};

console.log([3,5,6,99,1,3,42,2,10].fakeSort((a,b)=>{return a<b}));
console.log([3,5,6,99,1,3,42,2,10].fakeSort((a,b)=>{return a>b}));
console.log(['a','b','d','g','f','c','e'].fakeSort((a,b)=>{return a<b}));
console.log(['a','b','d','g','f','c','e'].fakeSort((a,b)=>{return a>b}));