'use strict'

String.prototype.fakeRepeat = function(amount){
    if (isNaN(amount)) return 

    let result = '';
    for (let i=0; i<amount; i++){
        result+=this + ' ';
    }
    return result;
}

console.log('Happiness'.fakeRepeat(15));