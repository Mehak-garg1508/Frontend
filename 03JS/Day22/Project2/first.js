// Parent se attach karenga

// Ab ise per event listener lagaiga
document.addEventListener("click", (event) => {
  //  Hame chahate ha ki click hone per circle appear ho
  // Create a div element
  const circle = document.createElement("div");
  circle.className = "circle";

  const color = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "white",
    "yellow",
    "wheat",
  ];
  const index = Math.floor(Math.random() * color.length);
  circle.style.backgroundColor = color[index];

  const text = [
    "Hi",
    "Hey",
    "Yo",
    "Sup",
    "Hola",
    "Hello",
    "Heya",
    "Yo!",
    "Hiya",
    "YoYo",
    "Namaste",
    "Wassup",
    "Hi :)",
    "Hey!",
    "Yo~",
  ];

  const x = event.clientX;
  const y = event.clientY;
  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;

  const index1 = Math.floor(Math.random() * text.length);
  circle.textContent = text[index1];

  const parent = document.querySelector("body");
  parent.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 5000);
});
