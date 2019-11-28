// Object.create and Pure Protopypal Inheritance

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

var john = Object.create(person);
john.firstname = 'Jonik';
john.lastname = 'Black';
console.log(john);

// POLYFILL:
// code that adds a feature which the engine MAY lack.
//
// this way we are creating a features for old browsers!!!

