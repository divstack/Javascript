// variable declaration

//primitive data type

/*
   string     var a = '';
   number     var b = 1;
   boolean    var c = true || false


*/

/*
   in js we have key value pair


*/

// declaring  string
var name = "Ryan";
console.log(typeof name);
// declaring  Number
var age = 26;
console.log(typeof age);
// declaring  Boolean
var isEnrolled = true;
console.log(typeof isEnrolled);
// declaring object
var Person1 = { name: "Ryan", age: 26, isEnrolled: true };
var Person2 = { name: "Mark", age: 19, isEnrolled: true };
var Person3 = { name: "Jeff", age: 34, isEnrolled: true };
console.log(typeof Person1);
// declaring  Array
var Students = [Person1, Person2, Person3];
console.log(typeof Students);

function addTwoNumbers(a, b) {
  a = 3;
  b = 10;
  console.log(a + b);
}

//console.log( typeof addTwoNumbers);

function productOfNumbers(a, b) {
  return a * b;
}

console.log(productOfNumbers(2, 5));

