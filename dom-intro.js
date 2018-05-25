// DOM also includes a rich API
// have a programmatic handle for the nodes
// in the HTML, we can use them perform trigger
// events in those files

// In this file we will learn to associate JS
// with HTML 


    function clickHandler(msg){
    console.log('hi... '+ msg);
    }
// get reference to the mybutton

let myButton = document.getElementById('myButton');
myButton.addEventListener('click', function(){clickHandler('from iffe!')});