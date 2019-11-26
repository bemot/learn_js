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





