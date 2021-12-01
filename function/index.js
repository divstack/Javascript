// functions are nothing but method used to execute given set of tasks

// adding 2 numbers
function addTwoNumber(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumber(2, 4));

const addTwoNumber1 = (n1, n2) => {
  console.log(n1 + n2);
};
addTwoNumber1(1, 2);

(function(){
    console.log('this is an IIFE');
})();


function calculateAges(dob, curr){
    let name1;
    name1 = 'Marcus';
    const currentAge = curr - dob;

    console.log(name1 ,'is ', currentAge);
 
}

calculateAges(1986, 2021)

