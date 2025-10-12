// access the element
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const input1 = document.getElementById("input1");
  const num1 = Number(input1.value);

  const input2 = document.getElementById("input2");
  const num2 = Number(input2.value);

  const result = num1 + num2;
  const re = document.getElementById("result");
  re.textContent += result;
});
