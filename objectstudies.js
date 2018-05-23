/*
In javascript, objects are the focus.
Javascript has concepts of class, but objects
are focused on more than on class.
Javascript works on 'Objects Linking to Other Objects'
*/

let originalCar = {
    make: 'bmw',
    model: '745li',
    year: 2010
}

let newCar = Object.create(originalCar)

console.log(newCar.make);
newCar.make = "mercedes benz";
console.log(newCar.make);
console.log(originalCar.make);
console.log(Object.getPrototypeOf(newCar));
let myPrototype = Object.getPrototypeOf(newCar);
originalCar.door = 4;
console.log(originalCar);
console.log(newCar.door);
console.log('--------------');
newCar.door = 2;
newCar.engineType = "electric";
console.log(originalCar);
console.log(newCar);
console.log(newCar.model);
console.log(originalCar.model);