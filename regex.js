// usage of RegEx is crucial! HUHUHAHAHAHA!

let pattern = /xyz/;
console.log(pattern);
console.log(typeof pattern);

let value = "This is xyz a test";

console.log(pattern.test(value));

console.log(value.replace(pattern, 'just'));

var match = value.match(pattern);

console.log(match.index);

