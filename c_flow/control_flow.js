// control flow or logic flow...

const temp = 48

if (temp < 50) {
    // console.log(`temperature is less than 50 & current temperature is ${temp}`)
}
// console.log(`temperature is greater than 50, ${temp}`)


const score = 100

if (score > 150) {
    const power = 'fly'
    // console.log(`Player power: ${power}`);
} else {
    const power = 'walk'
    // console.log(`Player current power: ${power}`);
}

const userLoggedIn = false
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true


if (userLoggedIn && debitCard) {
    // console.log('you can buy stuffs')
} else {
    // console.log('please provide relevent details')
}

// for testing multiple conditions

if (loggedInfromGoogle || loggedInfromEmail) {
    console.log('you can login')
}
