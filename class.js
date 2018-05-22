// javascript classes are syntactic sugar. 
// classes may do more harm than good
// classes in JS isnt the same as other object oriented programming

//class declaration in two following ways
/*
class Car{

}

let car = class {

}
*/

class Car{
    constructor(model, make, year){
        this.model = model;
        this.make = make;
        this.year = year;
    }
    print(){
        console.log(`${this.make} ${this.model} ${this.year}`);
    }
}
class SportsCar extends Car{
    revEngine(){
        console.log('VRRRROMM goes the ' + this.model);
    }
}

let myCar = new Car('745li', 'bmw', 2010);
let mySportsCar = new SportsCar('viper', 'dodge', 2015);

//console.log(Car);
//console.log(myCar);
console.log(myCar.print());
console.log(mySportsCar.print());
console.log(mySportsCar.revEngine());