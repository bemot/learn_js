// using an Immediately Invoked Function Expression
var greeting = function(name) {
    return 'Hello ' + name;
}('Sasha');

console.log(greeting);

var firstname = 'Sasha';
(function(name){

    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
}(firstname));


