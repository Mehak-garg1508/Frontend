// // Array
// // isme kise bhi type ki value print ho sakti ha
// const arr = [1, 2, 35, 8, 56, "rohit", true, 8, 8];
// console.log(arr);
// // 1.Length
// console.log(arr.length);

// // 2. Accessing character
// console.log(arr[4]);
// console.log(arr.at(6));
// // at is latest negative index bhi le leta ha
// // -1 matlab last se chalu hoga
// // -2 matlab last second
// console.log(arr.at(-2));
// const newarr = arr;
// // reference ie address is copied
// // Memory is allocated in heap
// console.log(newarr);

// // Jab hame chahata ha ki newarr aur arr alag alag create ho
// // then structureClone is used
// // helpful
// const narr = structuredClone(arr);
// // ab dono alag alag address hoga
// console.log(narr == arr);

// // push
// arr.push(30);
// arr.push(50);
// console.log(arr);

// // pop, pop the last element of array
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// // unshift :- Add element at start
// arr.unshift(10);
// arr.unshift(20);
// arr.unshift(30);
// console.log(arr);

// // shift :- Removes the first element
// arr.shift();
// arr.shift();
// console.log(arr);

// // delete operation
// // no doubt element toh delete kar dega per uski jagah khali chod dega
// // delete arr[0];
// // [hole, 1,2,35,8,56,"rohit"];
// // console.log(arr);
// // ise space ko koi aur istemal nhi kar sakta

// // index bata dega
// console.log(arr.indexOf(8));
// // last se index bataiga
// console.log(arr.lastIndexOf(8));
// // 1 ise array ma ha ya nhi
// console.log(arr.includes(1));

// // slice
// // 4th index is not included 2, 3 ka index aaiga sirf
// console.log(arr.slice(2, 4));
// // 5th index is not included
// // original array ma koi change nhi hota hota slice ke baad
// console.log(arr.slice(2, 5));
// console.log(arr);

// // splice():
// // console.log(arr.splice(2, 5));
// // kaha se start karna ha, total kitni value chahie, add element
// // splice(starting index, total_element_delete, add value);
// // 2 se start karna ha
// // total 5 elements chahie
// // Original Array ma changes hote ha
// // Vo jo hisa hamna splice kiya ha vo original array se hat jaige
// console.log(arr);
// // 2nd index se element add honi chalu ho jainge
// console.log(arr.splice(2, 3, "money", 90));
// console.log(arr);
// // agar sirf add karna ha deletenhi karna
// console.log(arr.splice(2, 0, "sohan", "bablu", 25, 35));
// console.log(arr);

// let arr2 = [2, 35, 1, 8, 9, "rohan", true, 8];
// console.log(arr2);
// console.log(arr2.toString());
// console.log(typeof arr2.toString());

// // join bhi string ma convert karta ha bs usme hame pass karte ha ki hame
// // elements kaise seperated chahie
// console.log(arr2.join(" "));
// console.log(arr2.join("*"));
// console.log(arr2.join("#"));

// concat
let num1 = [2, 35, 6, 11];
let num2 = [5, 12, 19, 20];
let num4 = [23, 432, 1123, 31];
// single array ma convert ho gya
// pehle num1 ki values aaige fir num2
let num3 = num1.concat(num2);
console.log(num3);
// pehle num1 fir num2 fir num4 ki values aainge
let num5 = num1.concat(num2, num4);
console.log(num5);
// ab ye 2d array ki tarah considered hoga
// vo pure num2 ko ek hi consider kar raaha ha
// num1.push(num2);
// console.log(num1);

num1.push(num4);
console.log(num1);
console.log(num1[4][0]);

// 2d array and 3d array
let arr1d = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr2d);
console.log(arr2d[0]);
// [1,2,3]
// [4,5,6]
// [7,8,9]
console.log(arr2d[0][2]);
console.log(arr2d[2][0]);

// 3d array
// 2d array ma ek aur array rakh diya
let arr3d = [
  [1, 2, [4, 5]],
  [6, 7, 8],
];
console.log(arr3d[0]);
console.log(arr3d[0][2]);
console.log(arr3d[0][2][1]);

// jab hame 2d array ko 1d ma convert karna ha
// flat by default 1 value leta ha toh vo ek asa array jo ek array ke andar present ha usko khol dega
// matlab 1 level tak hi gya
let newArr = arr2d.flat();
console.log(newArr);

// flat(2) => do level tak jaiga
let new1 = arr3d.flat(2);
console.log(new1);

// flat(Infinity) => jab array ki dimension na pata ho
// Ye array ki dimension jitni depth tak jaiga aur use convert kar dega 1d array ma

let abc = [2, 3, 1, 4];
console.log(Array.isArray(abc));

// geneally don't use it
let ac = new Array(2, 214, 345, 789);
console.log(ac);
// agar single value denga toh uska size define hota ha
let bc = new Array(10);
console.log(bc.length);
