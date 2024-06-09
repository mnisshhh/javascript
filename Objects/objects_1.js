const mySym = Symbol("mykey1")


const user = {
    name: 'manish',
    "full name":  "Manish Kumar Singh",
    age: 21,
    [mySym]: "mykey2",
    location: 'delhi',
    email: 'manish@gmail.com',
    isLoggedId: false
}

// console.log(user.name);
// console.log (user["full name"])
// console.log(user[mySym]);
// console.log(typeof user[mySym]);


// console.log(user);

// const greeting = user.greetings = function() {
//     console.log("hello js user");
// };

// console.log(greeting());

const another_greeting = user.another = function() {
    console.log(`hello js user, ${this.name}`)
};

console.log(another_greeting());


