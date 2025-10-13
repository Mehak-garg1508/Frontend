const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// addEventListner(,call back function, true/false)
// addEventListner teen value le sakta ha jisme se third value true ya false hogi
// false means Event Bubbling and by default false hi hoti ha value
// true means Event Capturing
// Event Bubbling
// Matlab andar se bahar jainge jesa jab ek bubble fulata ha toh vo chota se bada hota ha
// toh jab child per click karenga tab
// child
// parent
// grandparent
// print hoga
// Event Capturing
// Event Capturing kehta ha event bubbling se bilkul ulta
// ye bahar se andar aana ke baat karta ha
// agar child per click kara toh
// pehle grandparent fir parent fir child print hoga

// Event Deligation
// Hame pata ha parent ke pass child ka access ha hi
// Toh kisi kaam ko child ko na keh kar direct parent ko kehna
// Event Delgation hota ha

// event.StopPropogation
// stop kar dega event bubbling ya event capturing ko aagae propogate hone se

child.addEventListener(
  "click",
  (event) => {
    // event.stopPropagation();
    // console.log(child);
    // event target bataiga ki konsa event target hai
    console.log(event.target);
  },
  false
);

parent.addEventListener(
  "click",
  (event) => {
    // console.log(parent);
    // console.log(event.target);
    console.log(event.currentTarget);
  },
  false
);

grandparent.addEventListener(
  "click",
  (event) => {
    // console.log(grandparent);
    console.log(event.target);
    // currentTarget bataiga ki currently mera target kya hai
    // console.log(event.currentTarget);
  },
  false
);
