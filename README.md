# Array Methods
---
> Concatenate the two arrays

```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/blob/master/Tasks/Array-methods/1.Concatenate.js)
---

> How to take arguments in sum function?

```javascript
function sum() {
    return args.reduce((sum, current) => {
        return sum + current;
    });
}

sum(1, 2); // prints 3
sum(1, 2, 3); // prints 6
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/blob/master/Tasks/Array-methods/2.Arguments-of-function.js)
---

> How to pass arguments in sum function?

```javascript
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum()); // prints 6
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/blob/master/Tasks/Array-methods/3.Destructuring.js)
---

> Swapping Values using the Destructuring Assignment

```javascript
let a = 3;
let b = 6;
console.log(a); // 6
console.log(b); // 3
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/blob/master/Tasks/Array-methods/4.Swapping-values.js)
---

# SORT
---
##### Your function must use sort method

- Create a function that takes an array of numbers arr, a string str
and return an array of numbers as per the following rules:
- "Asc" returns a sorted array in ascending order.
- "Desc" returns a sorted array in descending order.
``` javascript
sortBy([4, 3, 2, 1], "Asc" ) // [1, 2, 3, 4]
sortBy([7, 8, 11, 66]) // [7, 8, 11, 66]
sortBy([7, 8, 11, 66], "Desc") // [66, 11, 8, 7]
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/tree/master/Tasks/Sort-method)
---

# MAP
---

##### Your function must use map method

- Write a function which returns array of usernames.
``` javascript
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
getUserNames(users); // ['Yuri Gagarin', 'Nil Armstrong']
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/blob/master/Tasks/Map-method/1.Getting-usernames.js)
---

- Write a function which returns array of lengths of user names

``` javascript
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
getUsernameLengths(users); // [12, 13]
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/blob/master/Tasks/Map-method/2.Getting-username-lengths.js)
---

- Write a function which parses string integers. If it's not possible to
parse, then add null

``` javascript
arseInteger(["1", "2", "34"]); // [1, 2, 34];
parseInteger(["1", "px", "2323"]); // [1, null, 2323];
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/blob/master/Tasks/Map-method/3.Parse-integers.js)
---

# FILTER
---
##### Your functions must use filter method

- Given an array, return a new array that only includes the numbers.
``` javascript
const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN];
// [1, 2, 55, 166]
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/blob/master/Tasks/Filter-method/1.Filtering-numbers.js)
---

- Write a function which remove users with language equals to 'ru'.
``` javascript
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
filterUsers(users); // [{ username: "Nil Armstrong, lang: "ENG" }]
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/blob/master/Tasks/Filter-method/2.Filter-by-lang.js)
---

- Write a function which filters object by field.
``` javascript
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
filterByField(users, "isAstronaut");
// [{ username: "Yuri Gagarin",lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG"}]
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/blob/master/Tasks/Filter-method/3.Filter-by-field.js)
---

# REDUCE
---
##### Your function must use reduce

- Given an array, return the sum of numbers that are 18 or over.
``` javascript
const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]
// 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/blob/master/Tasks/Reduce-method/1.Sum-of-ages.js)
---

- Write a function which calculates average age of users.
``` javascript
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
getAverageAge(users); // 55
```

* [Solution](https://github.com/Arman0701/JSON-Date-Array-methods/blob/master/Tasks/Reduce-method/2.Average-of-ages.js)
---

# Methods
* Implement these array methods
```
forEach
slice
splice
findIndex
find
map
filter
every
some
reduce
```
---
# Literature
##### Available in russian
* [Array methods]()