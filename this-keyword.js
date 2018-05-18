/*
var car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function(){
        return 5000;
    },
    printDescription: function(){
        console.log(this.make + ' '+ this.model);
    }
}
*/

function first(){
    return this;
}

//console.log(first() === global);

//this keyword depends on | HOW | an object is called

let myObject = {value : 'My Object'};

global.value = 'Global Object';

function third(){
    return this.value;
}

console.log(third());
console.log(third.call(myObject));
console.log(third.apply(myObject));


function fifth(){
    console.log("The name is " + this.firstName + " " + this.lastName);
}
let customer1 = {
    firstName: 'Bob',
    lastName: 'Taylor',
    print: fifth
}
let customer2 = {
    firstName: 'Advait',
    lastName: 'Ambeskar',
    print: fifth
}

customer2.print();
customer1.print();