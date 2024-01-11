//=============Question 1=============
let firstName = 'Alex';
let lastName = 'Bolshakov';

console.log(`Hello, my name is ${firstName} ${lastName}`);

//=============Question 2=============

let globalVar = 10;

if(1){
    let localVar = 20;
}

//console.log(localVar); = reference error in the console.
//localVar is not accessible to the global var. 
//It is not in the scope of global and is only accessible to its block.

//=============Question 3=============

let userInput = prompt('Please enter a number to determine if it is odd or even.');

let result = userInput % 2 === 0 ?  `${userInput} is an even number!!` : `${userInput} is an odd number. :(`;

console.log(result);

//=============Question 4=============
let fruit1 = 'Strawberry';
let fruit2 = 'Pineapple';

let fruitMessage = fruit1 + ' ' + fruit2;

console.log(fruitMessage);

//=============Question 5=============
let userName = 'Bolshi';
let isLoggedIn = true;

console.log(isLoggedIn === true ? `Welcome back, ${userName}!` : `Hello ${userName}! Please log in.`);

//=============Question 6=============

