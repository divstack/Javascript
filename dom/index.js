// using queryselector
const h = document.querySelector('h1');
console.log(h);


const ps = document.querySelector('p');
//* replacing existing value.*/
//ps.innerText = 'Hello';

/*appending a new value*/
//ps.innerText += 'Hello';


const id = document.querySelector('#text')

/* replacing existing value.*/
//id.innerHTML = '<h4>Id update</h4>'

/*appending a new value*/
id.innerHTML += '<span> Id update</span>'


const content = document.querySelector('.content');

const people = ['Ryan', 'Luigi', 'Marco'];

people.forEach(p => {
    content.innerHTML += `<p>${p}</p>`
})




// using queryselectorall

/*  updating the list of P*/
const p = document.querySelectorAll('p');
p.forEach(para => {
    console.log(para.innerText, '<=====list');
    
})


const li = document.querySelectorAll('li');
console.log(li);



// get element by id
const t = document.getElementById("text");
console.log(t, 'idenfying id');
//t.style.color = 'red'





