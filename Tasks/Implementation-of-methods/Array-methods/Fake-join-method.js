'use strict'

Array.prototype.fakeJoin = function(separator){
    if (typeof separator !== 'string') return
    separator = separator === undefined ? ',' : separator;
    let result = '';
    for (let i=0; i<this.length; i++){
        if (i === this.length-1){
            result += this[i];
            continue;
        }
        result += this[i] + separator;
    }
    return result;
}

console.log([1,2,3,4,5].fakeJoin(' '));
console.log([1,2,3,4,5].fakeJoin(''));
console.log([1,2,3,4,5].fakeJoin(' # '));
console.log(typeof [1,2,3,4,5].fakeJoin(' '));