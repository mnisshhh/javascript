const username = ['manish']

if  (username) {
    // console.log(`got the username: ${username}`)
} else {
    // console.log('dont have username')
}

//falsy values

// false, 0, -0, bigint 0n, "", null, undefined, and NaN

//truthy values

// true, 1, [], "manish", "0", "false", " ", {}, function(){}

// to check whether a array is empty or not

if (username.length === 0) {
    // console.log("array is empty")
} else {
    // console.log(`array has values: ${username}`)
}

// to know whether a object is empty or not

const myObj = {}

if  (Object.keys(myObj).length === 0) {
    // console.log("object is empty")
} else {
    // console.log("object has some values")
}

// nullish coalescing operator (??); null undefined

let val1;

// val1 = null ?? 10
// val1 = 5 ?? 10
// val1 = undefined ?? 10
// answer will be 10, this is to safeguard from null value
// console.log(val1)

// terniary operator

const clothPrice = 100

clothPrice >= 150 ? console.log("more than 150") : console.log("less than 150")

