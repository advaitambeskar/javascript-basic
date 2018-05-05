var count = 3;
do{
if (/* expression is true */ count == 4){
    console.log("YOU ARE AWESOME!")
    ++ count;
} else{
    console.log("OKAY?!");
    ++count;
}
}while(count < 10);

// switch

let hero = "SUPERMAN";
switch(hero.toLowerCase()){
    case 'superman':
    console.log(hero + ' has');
    console.log('\tsuper strength');
    console.log('\tx-ray vision');
    break;
    case 'batman':
    console.log(hero + ' has');
    console.log('\tmoney');
    console.log('\tintelligence');
    break;
    default:
    console.log(hero + ' is a ');
    console.log('\tlame superhero');
    break;

}

//ternary operations

let x = 234, y = '234';
let result = (x === y) ? 'equal' : 'not equal'; // '==' : equality;
// '===' : strict equality (equal with same datatypes)
// '!=' : not equal
// !== : strict not equal
console.log(result);