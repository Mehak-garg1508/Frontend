const arr = [10, 20, 30, 40, 50];

// const result = arr.reduce((accumulator, curr_value), intializer)

// return value hamara accumultor ma jati ha
const sum = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

console.log(sum);

// Single line ma kesa likhenga
const add = arr.reduce((acc, curr) => acc + curr, 0);
console.log(add);

// Real World Use Case
let fruits = [
  "orange",
  "apple",
  "banana",
  "orange",
  "apple",
  "banana",
  "orange",
  "grapes",
];
// Output ma chahie
// Ek asa object jo batai kitna orange, apple, banana, grapes ha
// output = {orange: 3, apple: 2, banana: 2, grapes: 1}

const op = fruits.reduce((acc, curr) => {
  if (acc.hasOwnProperty(curr)) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }

  return acc;
}, {});
console.log(op);

// hasOwnProperty: true ya false ma answer deti hai ki key use
// object ma present hai ya nhi
let obj = {
  name: "Megha",
  age: 20,
};

console.log(obj.hasOwnProperty("name"));
// return karega true
// Jiska matlab hoga name obj ma present hai
