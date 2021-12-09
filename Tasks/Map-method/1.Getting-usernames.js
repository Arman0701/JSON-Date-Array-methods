'use strict'

// Write a function which returns array of usernames.

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

function getUserNames(arr){
    if (!(arr instanceof Array)) return

    return arr.map(elem => {
        return elem.username
    })
}

console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']