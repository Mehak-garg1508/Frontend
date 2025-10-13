// const form = document.querySelector("form");

// 1.Click
// Jab hame value likhana ke baad click karnega
// Ya jab hame click karenga tab event trigger hoga
// form.addEventListener("click", (event) => {
//   // console.log(event.target);
//   console.log(event.target.value);
// });

// 2.Input
// Jab jab hame input denge tab tab event trigger hoga
// form.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// 3.focusin
// hamara focus karne se event trigger hoga
// form.addEventListener("focusin", (event) => {
//   console.log(event.target.value);
// });

// 4. focusout
// Jab hame apna focus hatainge event trigger ho jaiga
// form.addEventListener("focusout", (event) => {
//   console.log(event.target.value);
// });

// 5.dblclick
// Double click karna per event trigger hoga
// form.addEventListener("dblclick", (event) => {
//   // console.log(event.target);
//   console.log(event.target.value);
// });

// 6. Submit
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("form submitted");
// });

// 7. Reset
// form.addEventListener("reset", (event) => {
//   console.log("form resetted");
// });

const form = document.querySelector("form");
form.addEventListener("click", (event) => {
  event.preventDefault();
  const in1 = document.getElementById("first");
  const name = in1.value;
  const in2 = document.getElementById("second");
  const lastName = in2.value;
  const in3 = document.getElementById("third");
  const age = in3.value;
  const result = document.getElementById("result");
  if (name && lastName && age) {
    result.innerText = `${name} ${lastName} is ${age} years old.`;
    result.style.display = "block";
  }
  // document.body.append(result);
});
