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

let hero = "superman";
switch(hero){
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