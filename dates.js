// Date constructor function

// working with date type applications

let today = new Date();

let bob = new Date('December 7, 1969 07:01:23');
console.log(bob);
bob = new Date('1969-12-07T07:01:23');
console.log(bob);
bob = new Date(1969, 11, 6);
console.log(bob);
bob = new Date(1969, 11, 07, 07, 01, 23, 000);
console.log(bob);

var elapsedTimeInMS = today - bob;
console.log(elapsedTimeInMS);
console.log(bob.getDate()); // 1 = Monday, 7 = Sunday
console.log(bob.getTime());
/*
 *
 * getHour
 * getMinute
 * getSecond
 * etc.
 * 
 */
