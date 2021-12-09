'use strict'

// Write a function which remove users with language equals to 'ru'.

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

function filterUsers(arr){
    if (!(arr instanceof Array)) return
    return arr.filter(elem => {
        if (elem.lang === 'ENG') return elem;
    })
}

console.log(filterUsers(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]