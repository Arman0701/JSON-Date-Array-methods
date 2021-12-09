'use strict'

// Write a function which calculates average age of users.

function getAverageAge(arr){
    if (!(arr instanceof Array)) return
    return arr.map(elem => {return elem.age}).reduce((a,b) => {return a+b}) / arr.length;
}

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        age: 56,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        age: 54,
    },
];

console.log(getAverageAge(users)); // 55