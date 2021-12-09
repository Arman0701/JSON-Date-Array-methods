'use strict'

// Write a function which returns array of lengths of user names

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];

function getUsernameLengths(arr){
    if (!(arr instanceof Array)) return 
    return arr.map((elem => {
        return elem.username.length;
    }))
}

console.log(getUsernameLengths(users)); // [12, 13]