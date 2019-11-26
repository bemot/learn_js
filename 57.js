// function constructors, 'new', and
// the History of Javascript
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this functions is invoked');
}

var john =new Person('John', 'Doode');
console.log(john);

var jane = new Person('Jane','Keka');
console.log(jane);


// function constructors - a normal function that is used
// to construct objects
// The 'this' variable points a new empty object, and that
// object is returned from the function automatically


