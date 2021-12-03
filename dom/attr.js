// working with attributes

const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://cnn.com");
link.innerHTML = "cnn";


const para = document.querySelector('.para');
console.log(para.getAttribute('class'));
para.setAttribute('class', "newSelector");
para.setAttribute('style', 'color:green')


/* changing style.*/
const head6 = document.querySelector('.head6');
head6.setAttribute('style', 'margin: 50px')
head6.setAttribute('style', 'color: #3ae')
// head6.setAttribute('style', 'fontSize: 25px')
head6.style.fontSize ="22px";

const err = document.querySelector('errp');
err.classList