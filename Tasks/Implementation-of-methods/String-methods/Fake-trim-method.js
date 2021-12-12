'use strict'

String.prototype.fakeTrim = function(){
    let result = '';
    for (let i=0; i<this.length; i++){
        if (this[i] !== ' ') result+=this[i];
    }
    return result;
}

console.log('    hello     '.fakeTrim());