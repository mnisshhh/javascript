const appUser = {
    email: 'manish@google.com',
    age: 22,
    fullname: {
        first_name: 'manish',
        last_name: 'kumar singh'
    }
}

// console.log(appUser.fullname.first_name);

// combined two objects

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'a', 4: 'b'};

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};

// console.log(obj3);



