// using queryselector
const h = document.querySelector("h1");
console.log(h);

const ps = document.querySelector("p");
//* replacing existing value.*/
//ps.innerText = 'Hello';

/*appending a new value*/
//ps.innerText += 'Hello';

const id = document.querySelector("#text");

/* replacing existing value.*/
//id.innerHTML = '<h4>Id update</h4>'

/*appending a new value*/
id.innerHTML += "<span> Id update</span>";

const content = document.querySelector(".content");

const people = ["Ryan", "Luigi", "Marco"];

people.forEach((p) => {
  content.innerHTML += `<p>${p}</p>`;
});

// using queryselectorall

/*  updating the list of P*/
const p = document.querySelectorAll("p");
p.forEach((para) => {
  console.log(para.innerText, "<=====list");
});

const li = document.querySelectorAll("li");
console.log(li);

// get element by id
const t = document.getElementById("text");
console.log(t, "idenfying id");
//t.style.color = 'red'

/*relation parent child*/

const article = document.querySelector("article");

console.log(article.children, "<=== children");
console.log(Array.from(article.children), "<=== array children");
console.log(article.children, "<=== children");

Array.from(article.children).forEach((child) => {
//child.classList.add("article-element");
  console.log(child, "<==== children");
});


const title = document.querySelector('.head_parent');
console.log(title , '<=== tit');
console.log(title.parentElement, 'parentelement');
console.log(title.parentElement.parentElement, 'parentelement parentelement');
console.log(title.nextElementSibling , "<=== next sibling");
console.log(title.previousElementSibling, "previous sibling");

// chaining 
console.log(title.nextElementSibling.parentElement.children, 'chaining');


// working with events
const btn = document.querySelector('button');
btn.addEventListener('click' , () => {
    let name = 'Ryan';
    console.log('my name is ' + name);
    title.style.background = 'blue';
   
});

const body = document.querySelector('body');
btn.addEventListener('click' , () => {
    body.style.background = 'green';
})

const btnReset = document.querySelector('.btnReset');
btnReset.addEventListener('click', () => {
    body.style.background = 'white'
})


const items = document.querySelectorAll('.li_evt');
items.forEach(item => {

    const name = 'Ryan';
    item.addEventListener('click', (e)=> {
     // console.log(e, 'item clicked');
         //console.log(e.target);
       // console.log('my name is' + name);
        // console.log(item, 'event list');
       // e.target.style.textDecoration = 'line-through';
        e.target.style.fontWeight = 'bold';
        e.target.style.fontSize = '20px';
    })
})


