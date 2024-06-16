// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = 'Hello Manish!'

for (const greet of greetings) {

    if (greet == " ") {
        // console.log('space detected')
        continue
    }
    // console.log(`Each character is: ${greet}`)
}

