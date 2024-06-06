//playing with string

const self = "hello my name is manish kumar singh and i am a proud programmer"

const word = self.split(' ')
console.log(word[4])

const char = self.split('')
console.log(char[6])

const selfCopy = self.split()
console.log(selfCopy)

const anotherself = "my-name-is-manish"
console.log(anotherself.split('-'))


const text = "  name     "
console.log(text)
console.log(text.trim())
