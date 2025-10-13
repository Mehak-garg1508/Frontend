// const red = document.getElementById("red");
// const blue = document.getElementById("blue");
// const green = document.getElementById("green");
// const orange = document.getElementById("orange");
// const purple = document.getElementById("purple");

// red.addEventListener("click", () => {
//   document.body.style.backgroundColor = red.id;
// });

// blue.addEventListener("click", () => {
//   document.body.style.backgroundColor = blue.id;
// });

// orange.addEventListener("click", () => {
//   document.body.style.backgroundColor = orange.id;
// });

// purple.addEventListener("click", () => {
//   document.body.style.backgroundColor = purple.id;
// });

// green.addEventListener("click", () => {
//   document.body.style.backgroundColor = green.id;
// });

// agar hame getElementsByTagName use karenga toh uske sath hame direct
// for each use nhi kar sakta kyuki ye HTMLCollection return karke deta ha
// for that we need to convert HTMLCollection to array
// Otherwise we can use NodeList ie querySelectorAll it supports for Each loop
// const button = document.querySelectorAll("button");
// // console.log(button);
// button.forEach((btn) => {
//   // console.log(btn);
//   btn.addEventListener("click", () => {
//     document.body.style.backgroundColor = btn.id;
//   });
// });

// Ise mst color change ho raaha ha no doubt lakin isme dikat ha
// Ki ye optimized tarika nahi ha
// Kyuki ye button 100 bhi ho sakta ha aur use jayada bhi
// Aur jab button itna jayada honge toh event listner bhi jayada banage
// Kyuki for each loop bhi 5 event listener hi bana raaha ha
// aur jab bhut jayada event listner hone lag jata ha tab hamara
// event listner memory consume karna lag jata hai jiski vajah se
// system slow ho jata hai
// Iske optimized or best ke liye hame event deligation use karenga

document.body.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON")
    document.body.style.backgroundColor = event.target.id;
});
