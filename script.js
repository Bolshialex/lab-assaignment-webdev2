//=============Question 1=============
let firstName = 'Alex';
let lastName = 'Bolshakov';

console.log(`Hello, my name is ${firstName} ${lastName}`);

//=============Question 2=============

// let globalVar = 10;

// if(1){
//     let localVar = 20;
// }

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
{
    let localVar = 5;
    console.log(localVar);
}
//This ^ variable of can only be used inside the block of code 

let globalVar = 10;
console.log(globalVar);
//Global ^ variables can be used in any block of code.
//There were no problems running the code

//=============Question 7=============

//Used the same variables from question 1
console.log((`${firstName} ${lastName}`).length);

//=============Question 8=============
let product = 'Hat';
let discount = 0.20;

if(discount === 0.20){
    console.log(`20% discount on ${product}`);
}
else if(discount === 0){
    console.log(`No discount available for ${product}`);
}


//=============Question 9=============
//It didnt allow me to use name a variable name
let newName = 'Greg Cotton';
let place = 'The River';
let activity = 'Fishing';

let story = `There once was a man named ${newName}. He went to ${place} to do some ${activity}.`;
console.log(story);

//=============Question 10=============
//In your own words, explain the key differences between HTML, CSS, and JavaScript. Use plain language and provide a brief description of each.
/*
All three languages are very different but all work together well. Starting with HTML, 
it is the back bone for websites and offers you the ability to create the layout of the page.
CSS takes that backbone and builds on it by allowing you to customize the way your HTML file looks. 
It takes it away from the old website look and allows the user to change the look to be their own.
JavaScript is different as it has the ability to not only add things like interactivity to your page 
but it also has the ability to play a role in manipulating your website with the DOM, and can be used 
in the backend of things. JS is the most versatile of the bunch but all work best together.
*/