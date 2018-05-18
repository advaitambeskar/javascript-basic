// destructuring is pretty much like 'unpacking'

let a, b, c, d, e;

let names = ['david', 'eddie', 'alex', 'micheal', 'bob'];
/*
[a, b, c, d, e] = names;

console.log(c);
console.log(b);
console.log(a);
console.log(e);
*/
/*
let others;
[a, b, ...others] = names;

console.log(a);
console.log(b);
console.log(others);

*/

//working with destructuring and object

let year, model;
({year, model} = {
    make: 'bmw',
    model: '745li',
    value: 5000,
    year: 2010
});
console.log(year);
console.log(model);
