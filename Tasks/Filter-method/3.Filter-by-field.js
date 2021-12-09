'use strict'

// Write a function which filters object by field.

function filterByField(arr, prop){
    if (!(arr instanceof Array)) return
    return arr.filter(elem => {
        if (elem[prop]) return elem;
    });
}

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        isAstronaut: true,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        isAstronaut: true,
    },
    {
        username: "Elon Musk",
        isAstronaut: false,
    },
];

console.log(filterByField(users, "isAstronaut")); // [{ username: "Yuri Gagarin", lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG" }]
