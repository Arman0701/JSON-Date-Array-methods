'use strict'

String.prototype.fakeConcat = function(...args){
    args.unshift(this);
    let result = args;
    return result.map(elem=>{return elem.trim()}).join(' ');
}

console.log('Hello'.fakeConcat(' world', 'i\'m ', 'from ', 'Armenia'));