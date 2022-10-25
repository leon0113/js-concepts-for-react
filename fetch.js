//! JSON
const student = {
    name: 'Leon',
    age: 24,
    job: 'Student',
    bhv: ['good', 'loyal']
}

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

//! fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

//! keys values 
const keys = Object.keys(student);
const values = Object.values(student);

// for in to loop in object