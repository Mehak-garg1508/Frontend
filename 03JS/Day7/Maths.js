let num1 = 10;
let num2 = new Number(10);
let num3 = new Number(10);
// yaha per ek ka type number ha aur dusre ka type object
// Toh object ka number ma type conversion hoga
console.log(num1 == num2);
// yaha per dono ka type object hai toh no type changing
// aur dono address bara bar nhi hoga
console.log(num2 == num3);

let num = 231.68;
// Point ke baad kitni digit hogi
console.log(num.toFixed(1));
console.log(num.toFixed(4));
console.log(num.toFixed(0));

// toPrecision:- total kitni digit aaige
console.log(num.toPrecision(3));
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
console.log(num.toPrecision(4));

// toExponential
console.log(num.toExponential(2));
console.log(num.toString());
console.log(typeof num.toString());
console.log(num.valueOf());

// Maths is a object
console.log(Math.E);
// ise LN10 ka base e ha
console.log(Math.LN10);
console.log(Math.PI);
console.log(Math.LOG10E);

// 0 <= value < 1
console.log(Math.random());

console.log(Math.random() * 10);

// floor and ceil
let n1 = 23.9;
console.log(Math.floor(n1));
console.log(Math.ceil(n1));

// for random value from 0-9
console.log(Math.floor(Math.random() * 10));

// For 1-10
// 0-9 + 1
console.log(Math.floor(Math.random() * 10) + 1);

// 11-20
console.log(Math.floor(Math.random() * 10) + 11);
// 0-9 + 11

// Math.random() * (max-min+1) + min
console.log(Math.floor(Math.random() * (20 - 11 + 1) + 11));
// Kitna different type ke number ko generate karna ha

// For Ludo
// 1-6
console.log(Math.floor(Math.random() * (6 - 1 + 1) + 1));
// Math.random() takes help from system clock
// ise Math.random() ko gussess kiya ja sakta ha
