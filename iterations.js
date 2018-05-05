// for-loop iterations
for(let i = 0; i < 10; i++){
    console.log(i);
}

// for-loop array iterations
console.log('\n');
let a = [4, 8, 15, 16, 23, 25];
for(i = 0; i < a.length; i++){
    console.log(a[i]);
}

// for-loop code snippet
console.log('\n');  
var c = 0;
for (let i = 0; i < a.length; i++) {
    c = c + a[i];
    console.log(c);
}

console.log('\n');

// while-loop iterations
x = 0;
while(x < 10){
    x ++;
    console.log(x);
    if (x == 8){
        break;
    }
}