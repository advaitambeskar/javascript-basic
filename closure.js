/*
 * Closures allows to associate some data with some function, and allows function to be used
 * with the data pre-filled  
 */

 function sayHello(name){
     return function() {
         console.log("Howdy " + name);
     }
 }

 let bob = sayHello('bob');
 let connor = sayHello('Connor');

 bob();
 connor();

 