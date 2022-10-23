
//! tamplate string
const student = {
    name: 'Leon',
    age: 24,
    job: 'Student',
    bhv: ['good', 'loyal']
}

const about = `My name is ${student['name']} & my age is ${student.age}.People say that I am ${student.bhv[1]}`;
// console.log(about);

//! arrow function
//
const get55 = () => 55;
const x = get55();
console.log(x);
//
const add65 = num => num + 65;
//
const isEven = x => x % 2 == 0;
//
const add3 = (x, y, z) => x + y + z;
const result = add3(3, 5, 2);
console.log(result);
//
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//! spread operator 
const numbers = [15, 2, 5, 263, 47, 528, 52, 36, 50];

const newNumbers = [...numbers, 100];
numbers.push(99);
numbers.push(89);
numbers.push(79);

console.log(numbers);
console.log(newNumbers);