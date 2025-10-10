// Elements select karane ka alag alag tarika hota ha
const obj1 = document.getElementById("first");
console.log(obj1);

// HTML ka text bhi change kar sakta hai
obj1.innerHTML = "Namaste Coders";

obj1.id = "mahan";
console.log(obj1);

const obj2 = document.getElementsByClassName("header1");
console.log(obj2);
console.log(obj2[0]);

console.log(obj2[1]);

obj2[1].style.backgroundColor = "pink";
obj2[1].style.color = "black";
obj2[1].style.fontSize = "50px";

// Sab chij isme object ki form ma store hoti hai
// har choti se choti chij yaha object consider kiya jata hai
// DOM hamara html page ko objects ma convert kar deta hai
// jispe fir hame html use kar sakta hai
