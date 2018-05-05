function sayHello(name) {
    console.log('----------------');
    console.log('Hello ' + name + '!');
    console.log('----------------');
}

function calculateTax(totalAmount){
    let result = totalAmount * 0.0825;
    return result;
}

// sayHello('bob');

let salesTax = calculateTax(1500);
// console.log("The Sales Tax = " + salesTax);


/*
 * Function Expressions are functions that we might need to use once or maybe used in the future
 */

 setTimeout(function (){
     console.log('I waited 2 seconds');
 }, 2000);


 let counter = 0;
 function timeout(){
     setTimeout(function(){
        if(counter <10){
            console.log('hi '+ ++counter);
            timeout();
        }
     }, 2000);
 }

 timeout();
 // control + c to stop execution   
