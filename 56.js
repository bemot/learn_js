//56. reflections and extends
//Reflection - reflection: an object can look at itself,
//listing and changing its properties and methods.

var person = {
  firstname: 'Default',
  lastname: 'Default',
  address: 'Hlevakha, Voksalna str, 23/11',
  getFullName: function () {
    return this.firstname + '  ' + this.lastname;
  }
};

var john = {
  firstname: "John",
  lastname: "Doe"
};

//dont use this EVER! for demo purposes only!!!
//

john.__proto__ = person;

//john took all props of object person
// see it please you dumb
//
console.log(john.getFullName());

for (var prop in john) {
    console.log(prop + ': ' + john[prop]);
}

// show only own props
console.log('-----------------------');
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }

}

// a complement to prototypal inheritance
var jane = {
    address: '111 Main st.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {

    getFirstName: function() {
        return firstname;
    }
}

// using Underscore library
// _.extend combines all props and adds all to john object from jane
// and jim
_.extend(john, jane, jim);

console.log('-------------------------');
console.log(john);

