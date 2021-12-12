'use strict'

String.prototype.fakeIndexOf = function(value){
    if(!value instanceof String) return 
    
    let result = [];
    for (let i=0; i<this.length; i++){
        let find = '';
        for (let j=i; j<i+value.length; j++){
            find += this[j];
        }
        if (find === value) result.push(i);
    }
    return !result.length ? -1 : result;
}

console.log('Hello world'.fakeIndexOf('o'));
console.log('Hello world'.fakeIndexOf('a'));
console.log('Hello world, happy, ha, ha, ha, ha.'.fakeIndexOf('ha'));