//learning encapsulation in javascript
//allows us to not get public access to functions, objects, variables etc.

var counter = (function() {
    //private stuff is done too
    let count = 0;

    function print(message){
        console.log(message + ' --- ' + count);
    }


    //return an object full of properties
    return{
        get: function(){ return count; },
        set: function(value){ count = value;},
        increment: function(){
            count += 1;
            print("After Increment ");
        },
        reset: function(){
            count = 0;
            print("After Reset ");
        }
    }
})();
//console.log(counter);
console.log(counter.count);
counter.increment();
counter.increment();
console.log(counter.get());
counter.set(10);
counter.increment();
counter.reset();
