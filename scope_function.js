/*
 * This is a bad way of using scope
 * var myVariable = 'I am a global scope';
 * var myFunction = function() {
 *   console.log(myVariable);
 * }
 * myFunction();
 *
 */
function one(){
    return 'one';
}

let value = one;
console.log("Data type of one is " + typeof(value));

/* the returned answer gives value as function
 * we have string, number, boolean, undefined, function
 * Functions can be used to return a function
 */
console.log(value());

function two(){
    return function(){
        console.log('two');
    }
}
let myFunction = two();
myFunction();

function three(){
    return function(){
        return 'three';
    }
}
//calling a function from a function by invoking references to the said function through the original function
console.log(three()());

