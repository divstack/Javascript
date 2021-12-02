// working with attributes

const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://cnn.com");
link.innerHTML = "cnn";


const para = document.querySelector('.para');
console.log(para.getAttribute('class'));
para.setAttribute('class', "newSelector");
para.setAttribute('style', 'color:green')
