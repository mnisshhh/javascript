 const myarr = [0, 1, 2, 3, 4, 5]

console.log(myarr);

myarr.push(6)

console.log(myarr);

const names = ['manish', 'suresh', 'mukesh', 'anand', 'rakesh'];

// console.log(names);

names.push('radhika', 'riya');

console.log(names);

console.log(names.includes('riya'));
console.log(names.indexOf('mukesh'));

// ++++++++++++++++++++++++++++++++++++++ Joining Arrays ++++++++++++++++++++++++++++++++++++++++++++++++++++++

const newNames = ['riya', 'varsha', 'priya', 'shraddha']

const allNames = names.join('_')

console.log(allNames);



//slice

let heroes = ['ironman', 'superman', 'dr.strange', 'spiderman', 'antman', 'hulk']

// //note: this doesnt includes the last index like on 4th place there is antman but this count till 3rd only...

let anotherHeroes = heroes.slice(0, 4);

console.log(anotherHeroes);


// splice

let numbers = [1, 2, 3, 4, 5]

let anotherNumber = numbers.splice(2, 2);

console.log(anotherNumber);
console.log(numbers);

