'use strict'

String.prototype.fakeIncludes = function(value){
    if(!value instanceof String) return 
    
    for (let i=0; i<this.length; i++){
        let find = '';
        for (let j=i; j<i+value.length; j++){
            find += this[j];
        }
        if (find === value) return true;

        // // console.log(value.length);
        // console.log(this.length);
        // console.log(i);
    }
    return false;
}

console.log('The quick brown fox jumps over the lazy dog.'.fakeIncludes('dog'));
console.log('The quick brown fox jumps over the lazy dog.'.fakeIncludes('the'));