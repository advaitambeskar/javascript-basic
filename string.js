let string1 = 'Knowledge is power but enthusiasm pulls the switch'
let string2 = 'Do or do not. There is no try.'
let string3 = '4, 8, 15, 16, 23, 42';

console.log("Advait loves fish".toUpperCase());

let mySplit = string3.split(', ');
console.log(mySplit);

let mySlice = string1.slice (13, 18);
console.log(mySlice);

let mySubString = string1.substr(13, 5);
console.log(mySubString);

let myEndsWith = string2.endsWith('try.');
console.log(myEndsWith);

let myStartsWith = string2.startsWith("Does");
console.log(myStartsWith);

let myInclude = string2.includes('there');
console.log(myInclude); //case sensitive

let myRepeat = 'Ha '.repeat(3);
console.log(myRepeat);

let bloatedString = '             hi bloated string          ';
console.log(bloatedString.length);
console.log(bloatedString.trim().length);
 