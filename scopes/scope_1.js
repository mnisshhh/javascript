// function parent() {
//     const usernamee = 'manish'

//     function child() {
//         const password = 'mypass'
//         console.log(username)
//     }

//     child()
// }

// parent()

if (true) {
    const username = 'manish'
    if (username === 'manish') {
        const city = ' bhagalpur'

        // console.log(username + city)
    }

    // console.log(city) // it is not possible to access outside the scope of city
}

// console.log(username) //similarly, you can't access the username because it is out of the total scope. 


function addone(num) {
    return num + 1
}

// console.log(addone(1));


const addtwo = function(num) {
    return num + 2
}

console.log(addtwo(4));

