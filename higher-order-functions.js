function f(functio, num, ){
    let i;
    for(i = 0; i<num; i++){
        functio();
    }
}
module.exports = f;