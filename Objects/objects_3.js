const course = {
    coursename: 'js in hindi',
    instructor: 'manish',
    price: 999
}

const {instructor: ins} = course
console.log(ins);


//++++++++++++++++++++++++++ json format ----> mostly used in api ++++++++++++++++++++++++++++++++++++++++
//  {
//     'name': 'manish',
//     'age': 21,
//     'location': {
//         'country': 'India',
//         'state': 'New Delhi',
//     },
//     'full name': "manish kumar singh"
//  }