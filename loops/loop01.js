for (i = 0; i <= 11; i++) {
    const element = i;

    if (i == 5) {
        // console.log("the best target price")
    }
    // console.log(element)
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Table of: ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop: ${j} and inner loop ${i}`)
        // console.log(i + "x" + j + "=" + i*j)
    }
}

let myArray = ['flash', 'joker', 'batman', 'superman', 'ironman', 'thanos', 'dr.strange']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

// for (let i = 1; i <= 20; i++) {

//     if (i == 5) {
//         console.log('value detected')
//         break
//     }

//     console.log(`value of i is: ${i}`)
// }

for (let i = 1; i <= 20; i++) {

    if (i == 5) {
        console.log('value detected')
        continue
    }

    console.log(`value of i is: ${i}`)
}