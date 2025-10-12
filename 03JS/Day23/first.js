const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const orange = document.getElementById("orange");
const purple = document.getElementById("purple");
const body = document.querySelector("body");
document.addEventListener("click", (event) => {
  const color = event.target.value;
  if (color == "red") {
    body.style.backgroundColor = "red";
  }
  if (color == "blue") {
    body.style.backgroundColor = "blue";
  }
  if (color == "orange") {
    body.style.background = "orange";
  }
  if (color == "Purple") {
    body.style.backgroundColor = "purple";
  }
  if (color == "green") {
    body.style.backgroundColor = "green";
  }
});
