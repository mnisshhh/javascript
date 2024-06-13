// Immediately Invoked Function Expression

// (function cd() {
//     console.log('Connect to DB')
// })();

// (
//     () => {
//         console.log('connect to secod DB')
//     }
// )()

// if we have something to pass like variable


(
    (name) => {
        console.log(`connect to third db , ${name}`)
    }
)('patna-main')