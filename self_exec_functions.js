(function(){
  console.log('Hello World!');
})();

function isPersonVoteable(age) {

  if (isNaN(age)) {
    return voteable = "Input is not a number";
  } else {
    return voteable = (age < 18) ? "Too young" : "Old enough";
  }
}

console.log(isPersonVoteable('uu'));
console.log(isPersonVoteable(17));

// self invocked function
(function(age) {

  if (isNaN(age)) {
    voteable = "Input is not a number";
  } else {
    voteable = (age < 18) ? "Too young" : "Old enough";
  }
   return console.log(voteable);
})(3);

// loop test
var i = 0;
for (; i<3; i++) {
    console.log(i);
}

