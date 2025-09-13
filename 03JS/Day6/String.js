// String
// 1.Declaration

let s1 = "Hello Coder Army";
console.log(s1);
let s2 = "Hello World";
console.log(s2);
let s3 = `Kaise ho`;
console.log(s3);
let price = 50;
let s4 = `Price of tomato: ${price}, get as soon as possible`;
console.log(s4);

// 2. Length
console.log(s2.length);

// 3. Accessing character
console.log(s2[4]);
console.log(s2[0]);
console.log(s2[6]);
console.log(s2.charAt(9));
console.log(s2.charAt(10));

// 4. Changing case
console.log(s2.toUpperCase());
console.log(s2.toLowerCase());
// actual string is never changed only its copy is made
console.log(s2);

// 5.Searching in String
console.log(s2.indexOf("Hello"));
console.log(s2.indexOf("World"));
s2 = "Hello Coder Army Coder";
console.log(s2.indexOf("Coder"));
console.log(s2.lastIndexOf("Coder"));
// when not found index is -1
console.log(s2.indexOf("coder"));

// includes return true if found else false
console.log(s2.includes("hello"));
console.log(s2.includes("Hello"));

// 6. Splitting the string
// split(delimiter)
let s5 = "Honey, Bunny, Zordar, Popat";
console.log(s5.split(", "));
// agar hame delimiter ma " " include nhi karenga toh character start " " se hoga
let s6 = "Honey! Bunny! Zordar! Popat";
console.log(s6.split("!"));

// 7. Extracting substring
let s7 = "Hello Coder Army";
// last index is not included
console.log(s7.slice(0, 3));
console.log(s7.slice(3, 9));
console.log(s7.substring(2, 8));
// Difference between substring and slice is slice can be negative and
// substring can not be negative
console.log(s7.slice(3, -2));
// Will not work because start index should be mentioned first then second
// console.log(s7.slice(-1, 9));

// 8.Replacing content character
let s8 = "Hello ji kesa ho ji";
console.log(s8.replace("ji", "money"));
console.log(s8.replaceAll("ji", "money"));

// 9.Trimming
let s10 = "  trim  ";
console.log(s10);
console.log(s10.trimStart());
console.log(s10.trimEnd());
console.log(s10.trim());
