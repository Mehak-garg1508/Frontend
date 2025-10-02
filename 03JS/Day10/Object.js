// Creating object
// name , age, roll_number may seems variable but in actual they are
// string
const obj = {
  name: "Mehak",
  roll_number: 2822154,
  age: 21,
  gender: "Female",
  "account balance": 200,
  0: 20,
  1: 23,
};

console.log(obj);

// Accessing the values
// 1) Using dot Operator(.)
console.log(obj.name);
console.log(obj.age);
console.log(obj.roll_number);

// 2) using square bracket
console.log(obj["gender"]);

// Writting Key with space is not a good practice we should not do it
// If we do it then it must be present in " " and it can never be
// Accessed by dot operator
// We need to use square bracis for such cases
console.log(obj["account balance"]);

// Key can have number as a value also
// like 0: 20
// There is a benefit with it that we can directly access number in square bracket
console.log(obj[0]);
console.log(obj["1"]);

// Method 2 of Creating the object
const person = new Object();

// Assigning value
person.name = "Sohan";
person.age = 25;
person.address = "abc Nagar, xyz";
console.log(person);

// deleting a key value pair
delete person.address;
console.log(person);

// Modifying and updating
person.name = "Sahil";
person.age = 32;
console.log(person);

// Method 3 for creating object
// Use case bar bar create nhi karna padhta object ko
// Kitni hi bar use kar sakta ha
class People {
  constructor(na, ag, gen) {
    this.name = na;
    this.age = ag;
    this.gender = gen;
  }
}

const p1 = new People("Rohit", 23, "Male");
console.log(p1);
const p2 = new People("Radha", 12, "Female");
console.log(p2);

// Common methods for object
// Jab sari key ko print karana ho
const arr1 = Object.keys(obj);
console.log(arr1);

// Jab sari value ko print karana ho
const arr2 = Object.values(obj);
console.log(arr2);

// Jari sari keys aur values ke pair ko print karana ho
const arr3 = Object.entries(obj);
console.log(arr3);

// Object.assign()
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Isme obj1 change ho jaiga
// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3,obj1);
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3, obj1);
// Object 1 ki copy object 3 ma gai hai toh obj1.a se vahi value aaige
// will not change the original value
obj3.a = 7;
console.log(obj1.a);

// Method 2 Spread Operator
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);
