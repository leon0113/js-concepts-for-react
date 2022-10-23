const numbers = [45, 52];
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = numbers;
console.log(x, y);

//! object destructuring 

const { name, age } = { name: 'Leon', age: 24 };
// console.log(name, age);


const employee = {
    name: "LEON",
    id: 01,
    IDE: 'vs-code',
    languages: ['js', 'python', 'c++'],
    speacification: {
        height: 180,
        color: 'brown',
        weight: '80kg',
        address: 'Khulna',
        drink: 'Beer',
        watch: ['curran', 'Rolex', 'Casio']
    }
}

const { IDE, id } = employee;
// console.log(IDE, id);
const { height, address } = employee.speacification;
console.log(height, address);
//option chaining in case one variable is misssing
const [p, q] = employee?.speacification?.watch;
console.log(p, q);

