// // Creating an element
// const element1 = document.createElement("li");
// element1.innerHTML = "TS";

// const parent = document.getElementById("root");
// parent.appendChild(element1);

// function attach(content) {
//   const element2 = document.createElement("li");
//   element2.innerHTML = content;
//   const parent = document.getElementById("root");
//   parent.appendChild(element2);
// }
// attach("React");
// attach("Node");

// // 2. Create a TextNode
// const text = document.createTextNode("Hello Coder Army");
// parent.append(text);

// // 3. Create a Attribute Node
// const att1 = document.createAttribute("id");
// att1.value = "first";
// const list = document.querySelector("li");
// list.setAttributeNode(att1);

// // Accessing to second node
// const att2 = document.createAttribute("id");
// att2.value = "second";
// const list2 = parent.children[1];
// list2.setAttributeNode(att2);

// // Accessing to attributes
// // 1. getAttribute
// // 2. setAttribute
// // 3. removeAttribute

// // 1. getAttribute
// const ele1 = document.getElementById("root");
// console.log(ele1.getAttribute("class"));
// console.log(ele1.getAttribute("id"));
// console.log(ele1.getAttribute("style"));

// // 2. setAttribute
// const id = document.createAttribute("id");
// id.value = "naya";
// ele1.setAttributeNode(id);

// ele1.setAttribute("custom", 20);
// ele1.setAttribute("Megha", "Mehak");

// // 3. Remove Attribute
// ele1.removeAttribute("custom");
// ele1.removeAttribute("megha");

// // ********************Add nodes to DOM*******************
// Access parent node
const parent = document.getElementById("root");
const ele = document.createElement("li");
ele.textContent = "Coder Army";

// parent.prepend(ele);
// parent.append(ele);

const child2 = parent.children[1];
// inserted before child2
// parent.insertBefore(ele, child2);

// Replaces the second child with coder army
// parent.replaceChild(ele, child2);

// innerHTML
// parent.innerHTML = "Sari List ie content of ul replace ho jainge ise text se";

// parent.innerHTML += "TS";

// parent.innerHTML += "<li>TS</li>";

// 7. insertAdjacentElement
// beforebegin : Before the element itself
// afterend : After the element itself
// afterbegin: Inside the element, before its first child.
// beforeend: Inside the element, after its last child.

// parent.insertAdjacentElement("beforebegin", ele);
// parent.insertAdjacentElement("beforeend", ele);
// parent.insertAdjacentElement("afterend", ele);
// parent.insertAdjacentElement("afterbegin", ele);
