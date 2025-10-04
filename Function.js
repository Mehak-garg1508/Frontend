function greet() {
  console.log("Coder Army");
}
// Ek code ko bar bar nhi likhana padhta
// Code ko kitni hi bar use kar sakta ha
greet();
greet();
greet();

function sum(number1, number2) {
  console.log(number1 + number2);
}
sum(2, 3);
sum(8, 4);

function multiplication(num1, num2) {
  return num1 * num2;
}
console.log(multiplication(2, 3));
console.log(multiplication(4, 5));

// Method 2
const add = function (num1, num2) {
  return num1 + num2;
};
console.log(add(3, 6));

const div = function (num1, num2) {
  return num2 / num1;
};
console.log(div(5, 10));
console.log(div(3, 15));

// Method 3
// Arrow Method
const fun = () => {
  console.log("Hello");
  console.log("Kesa ho");
  console.log("Badhiya hu");
  return 20;
};

fun();
console.log(fun());

// return vali statement likhana ke baad kuch bhi execute nhi hota
const new_fun = () => {
  console.log("Hello Coders");
  return 100;
  console.log("Will not execute");
};
new_fun();
console.log(new_fun());

// Arrow function for single return statement
const multi = (num1, num2) => num1 * num2;
console.log(multi(2, 3));
console.log(multi(7, 9));
console.log(multi(5, 8));

// In case of single parameter
const print = (num1) => num1;
console.log(print(30));
console.log(print(60));
console.log(print(23));
console.log(print(34));

// Rest Operator
const func = function (...number) {
  console.log(number);
};
func(1, 2, 3);
func(3, 4, 5, 6, 10, 19, 2);
func(13, 14, 15);

let obj = {
  name: "Megha",
  age: 20,
  amount: 420,
};

const f = function (obj1) {
  console.log(obj1.name, obj1.age);
};

f(obj);

// Using Destructuring
const a = function ({ name, amount }) {
  console.log(name, amount);
};

a(obj);

// Prototype
console.log(a.__proto__ == Function.prototype);

console.log(a.__proto__.__proto__ == Object.prototype);

console.log(a.__proto__.__proto__.__proto__ == null);
