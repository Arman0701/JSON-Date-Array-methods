'use strict'

Array.prototype.fakeReduce = function fakeReduce(reducer, initialValue){
    initialValue = initialValue === undefined ? 0 : initialValue;
    if(this.length === 0) {
        return initialValue;
    } else {
        const [first, ...rest] = this;
        const updatedAcc = reducer(initialValue, first);
        return [...rest].fakeReduce(reducer, updatedAcc);
    }
}

console.log([1,2,3,4,5].fakeReduce((a,b)=>{return a+b}, 0));
console.log([1,2,3,4,5].fakeReduce((a,b)=>{return a+b}, 5));
console.log([1,2,3,4,5].fakeReduce((a,b)=>{return a*b}, 0));
console.log([1,2,3,4,5].fakeReduce((a,b)=>{return a*b}, 5));
console.log([1,2,3,4,5].fakeReduce((a,b)=>{return a-b}, 0));
console.log([1,2,3,4,5].fakeReduce((a,b)=>{return a-b}, 5));
console.log([1,2,3,4,5].fakeReduce((a,b)=>{return a/b}, 0));
console.log([1,2,3,4,5].fakeReduce((a,b)=>{return a/b}, 5));

console.log([1,2,3,4,5].reduce((a,b)=>{return a+b}, 0));
console.log([1,2,3,4,5].reduce((a,b)=>{return a+b}, 5));
console.log([1,2,3,4,5].reduce((a,b)=>{return a*b}, 0));
console.log([1,2,3,4,5].reduce((a,b)=>{return a*b}, 5));
console.log([1,2,3,4,5].reduce((a,b)=>{return a-b}, 0));
console.log([1,2,3,4,5].reduce((a,b)=>{return a-b}, 5));
console.log([1,2,3,4,5].reduce((a,b)=>{return a/b}, 0));
console.log([1,2,3,4,5].reduce((a,b)=>{return a/b}, 5));