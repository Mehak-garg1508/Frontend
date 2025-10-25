const ele1 = React.createElement("h1", {}, "Hello Coder Army");
const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
Reactroot.render(ele1);

const ele2 = React.createElement("h2", {}, "Kesa ho sab log?");
Reactroot.render(ele2);

// Jab hame Reactroot ma ele1 render kar raaha tha
// toh jo hamna html ma div ma likha tha vo sab gayab ho gya aur sirf ele1 show ho raaha tha
// Jab ele2 render kiya toh sirf ele2 dikha page per

// Ab agar hame ele1 and ele2 dono show karna ha toh kya karenga
const div = React.createElement("div", {}, [ele1, ele2]);
Reactroot.render(div);
// Ab dono show ho raaha ha
