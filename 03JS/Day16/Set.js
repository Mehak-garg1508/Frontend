// Set
// A set in a JavaScript is a collection of unique value. It allows use to
// store value without duplicates, which makes it different from
// arrays. The value in set can be of any type, such as primitive
// (number, string, etc) or objects.
// Add
// Delete
// Clear
// Has
// Size
let arr = [10, 20, 30, 10, 40, 30];
console.log(arr);

let set1 = new Set([10, 20, 30, 10, 40, 30]);
console.log(set1);
// jiske liye bhi new use ho jata ha uska type object hota ha
console.log(typeof set1);

// Array sari values ko print kar dega
// Lakin set hamari unique values ko hi print karta ha

// Method 2 of creating set
let set2 = new Set();

// inserting the element
set2.add(3);
set2.add("Rohit");
set2.add(6);
set2.add(30);
console.log(set2);

// delete
set2.delete(6);
console.log(set2);

// size of set2
console.log(set2.size);

// ig: id
const user_id = new Set([
  "rohit_negi9",
  "Mohi_91",
  "ravi.93",
  "chavi_90",
  "sumit_23",
]);
const new_id = "rohit_negi9";
console.log(user_id.has(new_id));

console.log(Set.prototype);

// Conversion from array to set
let arr1 = [10, 20, 30, 40, 50, 20, 10];

let set3 = new Set(arr1);
console.log(set3);

// conversion from set to array
// ... => is a spread operator
let resultArr = [...set3];
console.log(resultArr);

// Union of Sets
let set4 = new Set([10, 20, 30, 10, 40, 50, 20]);
let set5 = new Set([10, 20, 70, 80]);
let set6 = new Set([...set4, ...set5]);
console.log(set6);

// Intersection of sets
const result = [...set4].filter((num) => {
  return set5.has(num);
});
console.log(result);

const final = new Set(result);
console.log(final);

// Iterator over set
// for of loop
for (let value of set6) {
  console.log(value);
}

// Using for each
set6.forEach((value) => {
  console.log(value);
});
