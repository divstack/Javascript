// Understanding string datatypes.

// Strings
let email = 'myName@gmail.com';
console.log(email);


// string concatenation
let name = 'Maxwell jeff'; let age = 30; let gender = 'male';
let personInfo =  name + ' is a young ' + gender +' indivual of '  + age+ ' years old' ;
console.log(personInfo);


// getting Characters
const name2 = 'Ryan';
console.log(name2[1]);


// string lenght

const city = 'Boston'
const state = 'Rhode-Island';
console.log(city.length);
console.log(state.length);

// string methods.

let name3 = 'RyAn';
console.log(name3.toUpperCase());
console.log(name3.toLowerCase());

// creating template string in html 
let listOfCourses = 'Math, Physics, Biology';
let semester = 'Fall';

let html = `
<h1>Available courses [ ${listOfCourses} ] for</h1>
<h2> ${semester} Semester.</h2>

`
console.log(html , '<==== template string');