'use strict'

Array.prototype.fakeFilter = function fakeFilter(cb){
    if (!(this instanceof Array)) return 'Invalid value'
    let newArr = [];
    this.forEach(element => {
        if (cb(element)) newArr.push(element);
    });
    return newArr;
}

console.log([1,2,3,4,5].fakeFilter((elem)=>{return elem > 3}));