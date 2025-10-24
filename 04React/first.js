// React
// JS ki library hai

// Using JS
// const header1 = document.createElement("h1");
// header1.innerText = "Hello Coders";
// header1.style.fontSize = "30px";
// header1.style.backgroundColor = "blue";
// header1.style.color = "white";

// const header2 = document.createElement("h2");
// header2.innerText = "Kaise ho aap sab log?";
// header2.style.backgroundColor = "Black";
// header2.style.color = "white";
// header2.style.fontSize = "25px";

// const root = document.getElementById("root");
// root.append(header1);
// root.append(header2);

// Using Object
const React = {
  createElement: (tag, properties, children) => {
    const element = document.createElement(tag);
    if (typeof children === "object") {
      for (let val of children) {
        element.append(val);
      }
    } else element.innerText = children;
    // accessing properties
    // using for in loop for objects
    for (let key in properties) {
      element.style[key] = properties[key];
    }
    return element;
  },
};

const ReactDOM = {
  // render: means manipulate
  render: (element, root) => {
    root.append(element);
  },
};

const header1 = React.createElement(
  "h1",
  { backgroundColor: "Blue", fontSize: "30px", color: "white" },
  "Hello Coders"
);
ReactDOM.render(header1, document.getElementById("root"));

const header2 = React.createElement(
  "h2",
  { backgroundColor: "black", fontSize: "25px", color: "white" },
  "Kaise ho aap sab log?"
);
ReactDOM.render(header2, document.getElementById("root"));

// for UnorderList
const l1 = React.createElement("li", {}, "HTML");
const l2 = React.createElement("li", {}, "CSS");
const l3 = React.createElement("li", {}, "JS");

const Ul = React.createElement(
  "ul",
  { backgroundColor: "black", fontSize: "25px", color: "white" },
  [l1, l2, l3]
);
ReactDOM.render(Ul, document.getElementById("root"));

// Ise react ko vo js library keh raah aha
// asal ma react ek object hi ha
// React DOM bhi ek object hi ha
// Toh ye sab andar vala code pehle hi likha hua hota ha
// Ab ek kaam ye hai ki jisne library bana rakhi ha usko utha kar ma code ma le aau aur uske function ko use kar lungi
// Ab ye library banai kisne facebook ke developer na aur vahi ise maintain karta hai
// Hame bs coder ki life easy karni ha
