// Shallow copy
// Copy by Reference hota ha
const obj1 = {
  name: "Rohit",
  age: 25,
};
console.log(obj1);
const obj2 = obj1;
// If obj2 will make any changes then they will be reflected in
// obj1 also

obj2.name = "Mohit";
obj2.age = 29;
console.log(obj1, obj2);

// Shallow Copy
// In which obj1 copy is made and they both point different
// changes made by obj3 is not reflected in obj1
const obj3 = structuredClone(obj1);
obj3.name = "Shobit";
obj3.age = 28;
console.log(obj3, obj1);

// Nested Object
const user1 = {
  name: "Mehak",
  balance: 400,
  address: {
    pincode: 12345,
    city: "Kotdwar",
  },
};
console.log(user1);
console.log(user1.address);
console.log(user1.name);
console.log(user1.address.pincode);

// assign and spread operator ka nuksan
// Isme hame object ke andar jo object hota ha
// Vo same hi hota ha
// Matlab user2 and user1 same address ko point karta ha
const user2 = Object.assign({}, user1);
console.log(user2);

// Vo alag alag ha toh changes reflect nhi honge
user2.name = "Megha";
console.log(user1.name);

// Yaha per kyuki vo ek ko point kar raaha tha toh changes ho gai
user2.address.city = "Patna";
console.log(user1.address.city);

// Using Spread Operator
const user3 = { ...user1 };
user3.name = "Swasti";
console.log(user1.name);
user3.address.city = "UP";
console.log(user1.address.city);

// Destructuring of an Object
let obj = {
  name: "Megha",
  money: 420,
  balance: 30,
  age: 20,
};

const { name, balance } = obj;
console.log(name, balance);

// ab hame log full_name , amount, umar ko use karke hi name, balance,
// age ko access kar sakta ha
const { name: full_name, balance: amount, age: umar } = obj;
console.log(full_name, amount, umar);

// ... is a rest operator bacha hua sab kuch use aa jaiga
const { age, ...obj11 } = obj;
console.log(age);
console.log(obj11);

// For array
let arr = [3, 2, 1, 5, 10];
// const [first, second] = arr;
// console.log(first, second);

// Ek khali space matlab ek element ko chod kar agli
// const [first, second, , third] = arr;
// console.log(first, second, third);

// ... Rest Operator bacha hua sab kuch
const [first, second, ...third] = arr;
console.log(first, second, third);

// Nested Object ma Destructuring
const person = {
  name: "Suman",
  age: 20,
  address: {
    pincode: 23456,
    city: "Karnal",
  },
  arr: [90, 80, 70, 60],
  greet: function () {
    return "Hello Coder Army";
  },
  meet: function () {
    return 20;
  },
};
const { name: naam } = person;
console.log(naam);

const { address } = person;
console.log(address);

const {
  address: { pincode },
} = person;
console.log(pincode);

const {
  address: { city },
} = person;
console.log(city);

const {
  arr: [pehla, dusra],
} = person;
console.log(pehla, dusra);

person.greet();
person.meet();
console.log(person.greet());
console.log(person.meet());

// Prototype(__proto__)
// Sari properties contain karta ha jo hame lagata ha
const a = {
  name: "Sushma",
  age: 35,
};

const b = {
  money: 460,
  amount: 250,
};

// Abhi hame b ki properties hi access kar sakta ha b se
// Lakin fir hame b ki help se a ki properties bhi access kar
// sakta ha uska prototype change karke
b.__proto__ = a;

console.log(b.name, b.age, b.money, b.amount);

const c = [1, 2, 3];
// kisi bhi array ka prototype ka prototype object ka prototype hota ha
console.log(c.__proto__.__proto__ == a.__proto__);

console.log(Array.__proto__ == Object.__proto__);

console.log(c.__proto__ == Array.prototype);
