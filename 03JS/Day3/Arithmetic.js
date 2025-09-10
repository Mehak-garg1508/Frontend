//Arithmetic operator
// 1.Addition(+)
let a1 = 3 + 4;
console.log(a1);

// 2. Subtraction
let a2 = 9 - 3;
console.log(a2);

// 3.Multiplication
let a3 = 3 * 4;
console.log(a3);

// 4.Division
let a4 = 12 / 4;
console.log(a4);

// 5.Modulus (Stores remainder after division)
let a5 = 12 % 10;
console.log(a5);

// Not a good way
let res = 6 * 3 + 18 / 6 - 9;
console.log(res);
// Good way
res = (6 * (3 + 18)) / 6 - 9;
console.log(res);

// ++ increment
// -- decrement

let sum = 20;
// Post increment (a++)
let total = sum++;
// Pehle value total ko dedo fir sum ki value increase kardo 1 se
console.log(total); //20
console.log(sum); //21

// Post Decrement(a--)
sum--;
total = sum;
// Pehle sum ki value total ko dedo fir decrease karo 1 se
console.log(total); //21
console.log(sum); //20

// Preincrement(++a)
total = ++sum;
console.log(total); //21
console.log(sum); //21

// Predecrement(--a)
total = --sum;
console.log(total); //20
console.log(sum); //20
