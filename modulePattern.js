//learning encapsulation in javascript
//allows us to not get public access to functions, objects, variables etc.

var counter = (function() {
    //private stuff is done too
    let count = 0;

    function print(message){
        console.log(message + ' --- ' + count);
    }

    function get(){
        return count;
    }
    function set(value){
        count = value;
    }
    
    function increment(){
        count += 1;
        print("After Increment ");
    }

    function reset(){
        count = 0;
        print("After Reset ");
    }

    //return an object full of properties
    return{
        getValue: get(),
        setValue: function(value){set(value)},
        incrementValue: increment(),
        resetValue: reset()        
    }
})();
//console.log(counter);
//console.log(counter.count);
counter.incrementValue;
counter.incrementValue;
console.log(counter.getValue);
counter.setValue(10);
counter.incrementValue;
counter.resetValue;
