'use strict'

Array.prototype.fakeFill = function(fill, from, until){
    if (fill === undefined) return this;
    from = from === undefined ? 0 : from;
    until = until === undefined ? this.length : until;
    if (typeof from !== 'number' || typeof until !== 'number') {
        return "Invalid value";
    }

    let newArr = [];
    for (let i=0; i<this.length; i++){
        if (this[i] > from && this[i] <= until){
            newArr.push(fill);
        } else {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

console.log([1,2,3,4,5,6,7,8,9].fakeFill(1, 2, 5));
console.log([1,2,3,4,5,6,7,8,9].fill(1, 2, 5));