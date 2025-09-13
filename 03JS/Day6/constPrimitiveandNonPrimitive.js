const num = 10;
// num = 20;
// Can't do this will give error
console.log(num);

const obj1 = {
  id: 123,
  money: 3456,
};
obj1.id = 234;
obj1.money = 980;
console.log(obj1);
// The value is getting change because obj1 has constant address

let obj2 = {
  id: 789,
  money: 1000,
};

// obj1 = obj2;
// will give error because the address of obj1 is constant
