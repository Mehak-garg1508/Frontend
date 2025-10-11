// ************************
// Selection with CSS Selector
// 1. querySelector('')
// 2. querySelectorAll('')
// bracket ke andar kuch bhi aa sakta ha id, class, tagname kuch bhi

const obj1 = document.querySelector("#first");
console.log(obj1);

const obj2 = document.querySelectorAll(".header1");
console.log(obj2);

// How to iterate over them
// Method 1 with for of
for (let value of obj2) {
  console.log(value);
}

// Method 2 with for
for (let i = 0; i < obj2.length; i++) {
  obj2[i].style.backgroundColor = "blue";
}

// Method 3
obj2.forEach((value) => {
  console.log(value);
});

const obj3 = document.querySelector("ul");
console.log(obj3);

const obj4 = document.querySelectorAll("ul li");
console.log(obj4);

// ****************************
// Selection using TagName
const obj5 = document.getElementsByTagName("h2");
// obj5.style.color = "red";
// uper vali statement kaam nhi karegi kyuki ye list hogi
console.log(obj5);

// How to iterate
// Method 1 with for loop
for (let i = 0; i < obj5.length; i++) {
  obj5[i].style.color = "red";
}

// Method 2 with for of
for (let value of obj5) {
  console.log(value);
}

// Convert to array from object
Array.from(obj5);

// Method 3 with forEach
Array.from(obj5).forEach((value) => {
  console.log(value);
});

// ***************************
// Accessing using Relationship
// 1. Parent Node
// Method: Element.parentNode or Element.parentElement
// Description: Access the immediate parent of element
const list = document.querySelector("li");
console.log(list.parentNode);
console.log(list.parentElement);

// 2. Child Node
const par = document.querySelector("ul");
console.log(par.childNodes);
console.log(par.children);

// 3.first and Last Node
console.log(par.firstChild);
console.log(par.firstElementChild);

console.log(par.lastChild);
console.log(par.lastElementChild);

// Difference between innerHTML, textContent, innerText
const obj = document.getElementById("first");

console.log(obj.innerHTML);
console.log(obj.textContent);
console.log(obj.innerText);
