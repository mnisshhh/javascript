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
    // console.log('you can login')
}

// switch & break

const month = 8;

switch (month) {
    case 1:
        console.log('january')
        break;
    case 2:
        console.log('february')
        break;
    case 3:
        console.log('march')
        break;
    case 4:
        console.log('april')
        break;
    case 5:
        console.log('may')
        break;
    case 6:
        console.log('june')
        break;
    case 7:
        console.log('july')
        break;
    case 8:
        console.log('august')
        break;
    case 9:
        console.log('september')
        break;
    case 10:
        console.log('october')
        break;
    case 11:
        console.log('november')
        break;
    case 12:
        console.log('december')
        break;

    default:
        console.log('this is out of month number')
        break;
}