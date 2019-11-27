// function constructor and 'prototype'
// every function has code property, name (optional, can be
// anonymous) and prototype
//


function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this functions is invoked');
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var john =new Person('John', 'Doode');
console.log(john);

var jane = new Person('Jane','Keka');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ' ' + this.firstname;
}

console.log('-----------formal-----------');
console.log(jane.getFormalFullName());
console.log(john.getFormalFullName());

// objects take momory space with prototypes outside of objects
// we save a lot of memory because we are adding a property
// only one time to the objects

