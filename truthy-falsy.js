// it doesnt look like true, but based on rules of javascript it will be true --> truthy
// it doesnt look like false, but based on rules of javascript it will be false --> falsy


if(false){} else {console.log("False is falsy");}
if(null){} else {console.log("null is falsy");}
if(undefined){} else {console.log("undefined is falsy");}
if(0){} else {console.log("0 is falsy");}
if(NaN){} else {console.log("NaN is falsy");}
if(''){} else {console.log("'' is falsy");}
if(""){} else {console.log("\"\" is falsy");}

// Everything else is truthy
console.log('----------------')

if(!true){} else {console.log("True is truthy");}
if(!{}){} else {console.log("{} is truthy");}
if(![]){} else {console.log("[] is truthy");}
if(!'non'){} else {console.log("non is truthy");}
if(!Infinity){} else {console.log("Infinity is truthy");}
if(!1){} else {console.log("1 is truthy");}