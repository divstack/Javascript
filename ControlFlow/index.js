// for loops
// 1,2,3,4,5,6,7.
for (let i = 0; i <= 5; i++) {
  // console.log(i);
}
// while loops
let n = 0;

while (n < 3) {
  n++;
}

console.log(n, "<=== while");

// if statement
function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(testNum(-5));
// expected output: "NOT pos

function testAgeToDrink(age) {
  let output;
  if (age >= 21) {
    output = "allow to drink";
  } else {
    output = "not allow to drink";
  }

  return output;
}

console.log(testAgeToDrink(21));

const time = new Date().getHours();
function checkTime(t) {
  let greeting;
  if (time < 12) {
    greeting = "morning/AM";
  } else if (time >= 12) {
    greeting = "afternoon/PM";
  }

  return greeting;
}
console.log(checkTime(time));

function availableBook() {


  let listOfBooks = {
    b1: "Math",
    b2: "Physics",
    b3: "Chemistry",
  };


 if (listOfBooks.b1) {
    console.log(listOfBooks.b1);
  } else if (listOfBooks.b2) {
    console.log(listOfBooks.b2);
  } else if (listOfBooks.b3) {
    console.log(listOfBooks.b3);
  } else {
    console.log("no book available");
  }
}

availableBook();




// Break & continue


for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
   // console.log(i);
  }
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    console.log(i);
  }

// Switch statements


switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log(day);
// variables and block scope.
