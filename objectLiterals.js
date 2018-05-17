// car object

let car = {
    make :  'bmw',
    model : '745li',
    year : 2010,
    getPrice: function(){
        return 5000;
    },
    printDescription: function(){
        console.log(this.make + " " + this.model);
    }
}

car.printDescription();
console.log(car.year);
console.log(car.getPrice());
//console.log(car[1]); //dont use this
console.log(car['year']);


var anotherCar = {};
anotherCar.whatever = "Advait";
console.log(anotherCar.whatever);

var a = {
    myProperty: {
        b: 'hi'
    }
}
console.log(a.myProperty.b);


var c = {
    myProperty: [
        {d: 'this'},
        {e: 'better'},
        {f: 'be'},
        {g: 'funny'}
    ]
};
console.log(c.myProperty[1].e);