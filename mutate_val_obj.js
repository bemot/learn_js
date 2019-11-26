// by values (primitives)
var a =3;
var b;
b=a;
a=33;
console.log(a);
console.log(b);

//by reference (all objects including functions)
var c = {greeting: 'hi'};

var d;

d=c;

d.greeting="Hello"; //mutate object c

console.log(c.greeting);
console.log(d.greeting);

//by reference (even as parameters)
//
function changeGreetings(obj){
    obj.greeting ='Hola'; //mutate
}

changeGreetings(d);
console.log(c);
console.log(d);

//equals operator sets up new memory location
//
c = {greeting: 'howdy'};
console.log(c);
console.log(d);












