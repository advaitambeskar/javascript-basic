// try and catch allows us to prevent expected errors
// by allowing us to bolster the code by providing
// safeguards.

// requesting JSON Data is tricky (?) and this needs to
// be safeguarded as it is hugely dependent on the status
// of the server that is been requested from
function beforeTryCatch(){
    let obj = undefined;
    console.log(obj.b);
    console.log('If the previous line of code throws an exception, you\'ll never see this.');
}

//beforeTryCatch()

function afterTryCatch(){
    try {
        let obj = undefined;
        console.log(obj.b);
        console.log('If the previous line of code throws an exception, you\'ll never see this.');  
    } catch (error) {
        console.log('I caught an exception: ' + error.message);
    } finally{
        console.log("This will happen, no matter what!");
        // finally is used to clean all resources.
    }
}
afterTryCatch();

function performCalculation(obj){
    if (!obj.hasOwnProperty('b')){
        throw new Error('Object missing property');
    }
    else{
       return 6;
    }
}
function performHigherLevelCalculation(){
    let obj;
    obj = {
        mode : '1000a',
        model: 'whatever'
    }
    let value = 0;
    try {
        value = performCalculation(obj);
    } catch(error){
        console.log(error.message);
    } finally{
        if (value == 0){
            console.log('why no b property?');
        }
    }
}

performHigherLevelCalculation();