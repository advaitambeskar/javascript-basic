let x = 7; // numeric values
console.log(typeof x);

let y = true; //true or false
console.log(typeof y);

let z = 'hello world' //anything instead of single quotes
console.log(typeof z);

let a = 7;
let b = '6';
let c = a + b;
console.log('Answer : ' + c); //output = 76

//type conversion
b = parseInt(b, 10);
c = a + b;
console.log('Answer : ' + c);

let q = 3; 
let w = 2;
let e = q + w;

/*
 * 1. let e ... variable declaration
 * 2. perform evaluation q + w
 * 3. assign the result evaluated to e 
 */

/*
 * Assignment =
 * Arithmetic + - * / %
 * Increment ++
 * Decrement --
 * Function invocation operators ()
 * Logical 'and' &&
 * Logical 'or'  ||
 * Member Accessor Operator .
 * Array Element Access []
 * Code Block Operator {}
 */

// Array is a variable that holds a large volume of values

let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let b1 = ['a', 'whatever', '22ss', 'mike'];
console.log(a1[2]);
console.log(a1);
console.log(b1);

a1[0] = 7;

// Javascript allows arrays to have dissimilar datatypes. This is amazing?!

a1[2] = "whatup";

console.log(a1);

console.log(a1.length); // actual number and does not start the count from 0
/*
 * a1[20] = 'whatevers';
 * console.log(a1); //shows that there are 10 empty values which is not proper
 */
a1.push(77); //add elements to the last position
console.log(a1);
a1.pop(); //remove the last element
a1.pop();
a1.pop();
console.log(a1);