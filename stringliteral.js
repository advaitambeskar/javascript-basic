//use of ternary operator shown here
/* 
let name = "BOB";
console.log(`hi ${name}`);
console.log('hi ${name}');

let sentence = `My name is Advait. I am developing websites for a long time now.
For some time now, I was rather busy with everything else and forgot about web development.
This caused me to forget a large part of it. This tutorial has since May of 2018, helped me
remember whatever I was missing and get me to speed too! This is fun! Also, in addition to this,
I am excited to use the TensorFlow.js library in my websites! Let us see how that turns out to be!`

console.log(sentence);

*/

function getReasonCount(){ return 2;}

let interpolation = `Give me ${(getReasonCount() == 1? 'one good reason': 'a few reasons')} to try this`;

console.log(interpolation);