'use strict'

Array.prototype.fakePop = function(){
    let result = this[this.length-1];
    this.length--;
    return result;
}

let arr = [1,2,3,4,5];
console.log(arr.fakePop());
console.log(arr.length);