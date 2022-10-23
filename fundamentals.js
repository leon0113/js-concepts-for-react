//! 1. How to declare a variable using let & const
const fathername = 'arnold';
let season = 'summar';
season = 'winter';
//! 2. condition : > < === !== <= >=

if (fathername === 'Arnold' || season === 'rainy') {
    console.log(fathername);
}
else if (fathername === 'arnold') {
    console.log('right');
}
else {
    console.log('soory');
}

//! 3. Array
// index, length , push, 
const numbers = [15, 2, 5, 263, 47, 528, 52, 36, 50];
numbers[0] = 54;

//! 4. loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

//! 5. function
function multiply(a, b) {
    const sum = a * b;
    return sum;
}
const result = multiply(5, 6);
console.log(result);

//! 6. Object 
// 3 ways to access object property
const student = {
    name: 'Leon',
    age: 24,
    job: 'Student',
    bhv: ['good', 'loyal']
}

const ageOfObject = student.age;
console.log(ageOfObject);

student['job'] = 'web developer';
console.log(student);

console.log(student['bhv']);