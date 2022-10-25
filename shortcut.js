// falsy:
// '' 0 false null undefined
// truthy : 
//'asdad' , 5 , true {} []

let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}
// console.log(myVar);

let myMoney = 0;
if (!myMoney) {
    // console.log(' its  0');
}
else {
    // console.log('I have money');
}
const money = 80;
let food;
if (money > 100) {
    food = 'biriany';
}
else {
    food = 'cha biscuit'
}
// console.log(food);

//! ternary operation

const money1 = 101;
let food1 = money1 > 100 ? 'biriany' : 'cha biscuit';
console.log(food1);


// let num = 5;
// const res = Math.pow(num, 2);
// console.log(res);

let drink = (money1 > 100 && money > 90) ? 'coke' : 'water';

// num to string
const num1 = 52;

const numStr = num1 + '';
console.log(typeof (numStr));

// string to num
const string = '40';
const stringNum = +string;
console.log(typeof (stringNum));


let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('Hide user');

// isActive ? showUser() : hideUser();
// use &&
isActive && showUser();
// use ||
!isActive || showUser();

//toggle boolean
isActive = !isActive;
