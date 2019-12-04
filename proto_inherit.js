function Person(first, last, age, eye) {
  this.firstName = first || '';
  this.lastName = last || '';
  this.age = age || '';
  this.eyeColor = eye || 'blue';
}

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName
};

var myFather = new Person("John", "Doe", 50, "green");
document.getElementById("demo").innerHTML =
"My father is " + myFather.fullName() + "<br>" +"his eyes are " + myFather.eyeColor;


