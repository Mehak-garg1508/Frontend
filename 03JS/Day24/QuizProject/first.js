// const form = document.querySelector("form");
// const original_ans = [
//   "Sachin Tendulkar",
//   "West Indies",
//   "Sachin Tendulkar",
//   "264",
//   "Muttiah Muralitharan",
// ];

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const data = new FormData(form);
//   const ans = Array.from(data.values());
//   let result = 0;
//   for (let i = 0; i < ans.length; i++) {
//     if (ans[i] == original_ans[i]) result++;
//   }

//   const out = document.getElementById("out");
//   out.innerText = `${result} out of 5`;
// });

// Ab ise logic ma dikat thi ki ye sirf tabhi sahi answers show karega jab hame 5 ke 5 question attempt karenga
// Agar mena 2 question sahi attempt karke submit kar diya
// Toh ye 0 out of 5 dikhaiga
// Ise problem ko solve karna ke liye hamna object use kiya

const original_ans = {
  q1: "Sachin Tendulkar",
  q2: "West Indies",
  q3: "Sachin Tendulkar",
  q4: "264",
  q5: "Muttiah Muralitharan",
};

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  let result = 0;
  for (let [key, value] of data.entries()) {
    if (value == original_ans[key]) {
      result++;
    }
  }
  const out = document.getElementById("out");
  out.innerText = `${result} out of 5.`;
});
