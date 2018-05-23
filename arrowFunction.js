// short hand syntax for creating a real function
// many different ways of using arrow function

// arrow functions are used really frequently

let hi = () => { console.log("howdy"); }
hi();

let hi2 = (name) => { console.log(`howdy ${name}`); }
hi2('Advait');

let add = (number1, number2) => { return number1 + number2; }
console.log(add(7,3));

//what is the purpose of arrow functions?
/* 
 * used when you have to run a function over each element of array
 */

let name = ["advait", "bob", "random"];
// name.map will iterate through every element of array
name.map((names) => console.log(`Howdy ${names}!`) ); 

let firstNames = ["Advait", "Bob", "Random"];
let i = 0;
firstNames.map((names) => {i++; console.log(`Howdy ${names} ${i}!`); return i;});

console.log(`Total Name count is ${i}`);