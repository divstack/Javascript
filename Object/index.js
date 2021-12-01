//

const Car = {
  name: "Honda",
  model: "Civic",
  year: 2011,
  color: "blue",
};

const House = {
  model: "devian",
  type: "2 stories",
  yearBuild: 1995,
  sqf: 3023.4,
  builder: "Dr Horton",
};

let user = {
  name: "Jeff",
  age: 30,
  email: "j@gmail.com",
  location: "202 stephen st,  Dallas Texas 75041 ",
  //blogs: ['review Text', 'Mark Check', 'APalisade'],
  blogs: [
    { title: "the Gen1", yearPublish: 1999 },
    { title: "the Gen2", yearPublish: 2004 },
  ],
  login() {
    console.log("user logged in");
  },
  logout() {
    console.log("user logged out");
  },
  logBlogs() {
    this.blogs.forEach((blog) => {
      console.log(blog.title + " was publish in " + Number(blog.yearPublish));
    });
  },
};
//console.log(user.logBlogs());

const listOfCars = ["Mercedes", "Toyota", "Honda", "Nissan"];
const listOfEmployeeCode = [101, 102, 103, 104, 105];
let products = [
  { category: "food", name: "cabbage", price: 3.0 },
  { category: "Appliances", name: "Fridge", price: 900.0 },
  { category: "Clothes", name: "sweater", price: 10.0 },
  { category: "shoes", name: "Tennis", price: 40.0 },
];
let products1 = [
  { category: "food", name: "cabbage", price: 9.00, tax: 0.3 }
  
];

products1.forEach(p1 => {
    // calculate the price after tax
    let priceAfterTax = (p1.price * p1.tax) + p1.price;
    console.log( priceAfterTax , '<==== price');
})

// loop [ for , foreach, map ]

// for(let i = 0 ; i< listOfCars.length; i++){
//     console.log(listOfCars[i]);
// }
// for(let i = 0 ; i< listOfEmployeeCode.length; i++){
//     console.log(listOfEmployeeCode[i]);
// }
// for(let i = 0 ; i< products.length; i++){
//     console.log(products[i].category);
// }

listOfCars.forEach(car =>{
    //console.log(car);
})
listOfEmployeeCode.forEach(employee => {
    //console.log(employee);
})
products.forEach(product => {
    //console.log(product.name);
})



