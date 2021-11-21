// Arrays are part of the object datatype


const students = ['ryan', 'marcus', 'jeff', 'Bryan'];
let grades = [90, 100, 80];
let array = [];




// arrays methods
/*
   Join
   concat
   indexOf
   push


*/

let joinArr = students.join('-');
console.log(joinArr, '<===== join');
let concatArr = students.concat('brandon')
console.log(concatArr, '<===== concat');
let indArr = students.indexOf('ryan')
console.log(indArr, '<===== indexOf');
let pushArr = students.push('marco')
console.log(students, '<===== push');