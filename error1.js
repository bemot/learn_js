const person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){

        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}
//creating function on a fly
(function(lang1, lang2){

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments:' + lang1 +' ' + lang2);
    console.log('---------------------');
}).apply(person, ['en', 'es']);

//function borrowing
//
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));
