let a = 10;
let b = a;
console.log(b);
b = 30;
// Call by value hoga
// Value of b will get changed only, the value of a will remain smae
console.log(a);
console.log(b);

// Call by refernce hoga
let obj1 = {
  id: 15,
  name: "Mehak",
};
// Address of obj1 will be passed to obj2
obj2 = obj1;
console.log(obj1);
console.log(obj2);
obj2.id = 10;
console.log(obj2);
console.log(obj1);

// Primitive data type
let c = 10;
console.log(c);
c = "Rohit bhaiya";
console.log(c);
