let obj = {
  name: "Megha",
  age: 23,
  gender: "female",
  city: "Karnal",
};

// for in loop
// for(let property_name in obj_name)

// Accessing Keys
for (let key in obj) {
  console.log(key);
}

// Accessing Key and value both
// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// Object.Keys(obj_name) se bhi toh hame keys ko access kar pa
// raaha tha toh for-in loop or Object.keys() ma kya fark ha
console.log(Object.keys(obj));

// yaha per obj2 inherit the properties of obj
let obj2 = Object.create(obj);
obj2.money = 420;
obj2.account_number = 12345;
console.log(Object.keys(obj2));

for (let key in obj2) {
  console.log(key);
}

// Toh inhe dono ma ye difference ha ki
// Object.keys() se hame inherit properties ko access nhi kar sakta ha
// Lakin for in loop ma hame inherit properties
// access kar sakta ha

let obj1 = {};
console.log(obj1);
obj1.name = "Megha";
console.log(obj1);

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// Writable: true
// Changes can be done
obj1.name = "Mehak";
console.log(obj1);

// configurable: true
// Ye kehta ha ki writable aur enumerable ki value change kar sakta ha
// agar configurable: false
// toh writable aur enumerable ki value change nhi kar sakta

let o = {};
Object.defineProperty(o, "age", {
  value: 40,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(o);
o.age = 20;
console.log(o);

Object.defineProperty(o, "age", {
  writable: false,
});

// Because writable is false so we can't made changes in value
o.age = 30;
console.log(o);

Object.defineProperty(o, "age", {
  configurable: false,
});

// // Now we can't change value of writable and enumerable
// Object.defineProperty(o, "age", {
//   writable: true,
// });
// o.age = 10;
// console.log(o);
// Ab hamna writable true kar diya fir bhi changes nhi hua
// Kyuki pehle hamari writable ki value false thi
// Fir jab hamna writable ki value true ki tab use pehle
// configural ki value false thi which means writable : true
// karna ke baad bhi writable ki value change nhi hui hogi
// Vo abhi bhi false hi hoga

// Enumerable
// Property ko access kar sakta ha ya print hogi ya nhi
let user1 = {
  name: "Megha",
  age: 20,
};

let info = Object.create(user1);
info.account_number = 12345;
info.amount = 420;

for (let key in info) {
  console.log(key);
}
// by default har property ka enumerable true hota ha isliye ye
// name aur age vala inherit hone ke baad bhi show ho raaha ha
// for in loop dekhata ha ki enumerable true ha agar ha toh print
// kardo

// Object.prototype ki properties bhi inherit ho raahi hoti ha
// lakin show nhi hoti kyuki unke enumerable false hote ha
// hame isko change bhi kar sakta ha
// Object.defineProperty(Object.prototype, "toString()", {
//   enumerable: true,
// });
// // ab toString() vala bhi show honge sabke sath as inherited property
// for (let key in info) {
//   console.log(key);
// }

// Hame for in loop ko array ke liye use nhi karta
let arr = [10, 20, 30, 40, 50];
for (let key in arr) console.log(key);

// ab manta hai koi glti se arr.name = "rohit" kar deta ha toh kya hoga
arr.name = "rohit";
for (let key in arr) console.log(key);
// ab key ma name bhi dekhega ki name bhi ek key ha index ha
// Lakin hame janta hai ki key ma sirf aur sirf number aa sakta ha
// ie index can take only numeric value toh ye glt hoga
// kyuki ise for in loop na key ka enumerable check kiya
// aur print kar diya

// toh best hoga hame simple loop use kare
for (let index = 0; index < arr.length; index++) {
  console.log(index, arr[index]);
}
// isme name: "rohit" print nhi hoga
