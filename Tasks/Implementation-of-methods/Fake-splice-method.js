'use strict'

Array.prototype.fakeSplice = function(start, size, replace){
    if (typeof start !== 'number' && typeof size !== 'number') return
    if (start == undefined || start<0 || size<0) return "Invalid parameter(s)"
    if (replace == undefined){
        let newArr = [];
        size = size === undefined ? this.length : size;
        for (let i=0; i<this.length; i++){
            if (i>=start && size>0) {
                newArr.push(this[i]);
                size--;
            }
        }
        return newArr;
    } else {
        let tmpArr = [];
        let flag = true;
        for (let i=0; i<start; i++){
            tmpArr.push(this[i]);
        }
        for (let i=0; i<=size; i++){
            if (flag){
                tmpArr.push(replace);
                flag = false;
            } else continue;
        }
        for (let i= start+size; i<this.length; i++){
            tmpArr.push(this[i]);
        }
        return tmpArr;
    }
}

console.log([1,2,3,4,5,6,7,8].fakeSplice(3));
console.log([1,2,3,4,5,6,7,8].fakeSplice(3, 1));
console.log([1,2,3,4,5,6,7,8].fakeSplice(3, 0));
console.log([1,2,3,4,5,6,7,8].fakeSplice(1, 3, 'a'));
console.log([1,2,3,4,5,6,7,8].splice(1, 3, 'a')); 