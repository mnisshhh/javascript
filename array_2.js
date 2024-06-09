const first_heroes = ['ironman', 'spiderman', 'antman', 'thor'];

const another_heroes = ['superman', 'flash', 'batman'];

const allheroes = first_heroes.concat(another_heroes);

const villians = ['thanos', 'joker']

// console.log(allheroes);

// console.log(allheroes.indexOf('thor'));
// console.log(allheroes[4]);

//another way to do the same, this one is more useful for having more than two arrays

//this  one is basically knows as spread operator

const newall = [...first_heroes, ...another_heroes, ...villians];

// console.log(newall);


let another_array = [1, 2, 3, [4, 5, 6], 7, 8, [1, 2, 3, [5, 9, 0]]]

// console.log(another_array);

let real_array = another_array.flat(Infinity);

// console.log(real_array);

// conversion of any object, string into array

const name = 'manish';

// console.log(Array.from(name));


let score_1 = 100;
let score_2 = 200;
let score_3 = 500;

console.log(Array.of(score_1, score_2, score_3));