/*
 1. Number   ---> 1,2,3,4, 1.12, 3.14
 2. String   --- > 'Hello World', 'ryan@student.com'
 3. Boolean  ----> true / false
 4. Null     ----> Explicitly set a variable with no value
 5. Undefined ----> For bariables that have not been defined yet.
 6. Object    ----> Complex data structures - Array, Dates, Literals etc.
 7. Symbol    ----> Used with objects
*/

// Research on these Keywords var, let, const

// eg.
var name1 = 'Ryan c';
let name2 = 'Ryan r';
const name3 = 'Ryan y';
//console.log(name3 = 'hello');


 let status = false;
 let initialValue = null;
 let groupName = undefined;
 const getPaymentType = () => {

 }
 function getPaymentType1(){

    // declaring variables
    let fname , lname, Fullname;

    // variable assignment
     fname = 'ryan';
     lname = 'Zouch';

     // string concatenation
     Fullname = fname + ' '+ lname;

     // displaying the result
     console.log(Fullname);

 }

 // calling the function
 getPaymentType1();

 console.log(typeof status);
 console.log(typeof initialValue);
 console.log(typeof groupName);
 console.log(typeof getPaymentType);
 console.log(typeof getPaymentType1);


