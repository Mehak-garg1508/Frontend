const ele = React.createElement("h1", {}, "Hello Coder");
// Ye vali statement React 18 se pehle kaam karti thi
// ReactDOM.render(ele, document.getElementById("root"));

// Ye React 18 per kaam karti karti hai
// Jab sab root ka Reactroot ke pass hoga
const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
Reactroot.render(ele);
