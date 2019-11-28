// 62. Dangerous Aside: Arrays and
// for..in
// adding through 'prototype' a new custom feature

Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}

console.log('----------------------------');
console.log(arr.myCustomFeature);

arr.push('Sasha');
var i;
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


