const quotes = [
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "The best way to predict your future is to create it. — Abraham Lincoln",
  "Dream big. Start small. Act now. — Robin Sharma",
  "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Do something today that your future self will thank you for.",
  "Discipline is doing what needs to be done, even when you don’t feel like doing it.",
  "Everything you’ve ever wanted is sitting on the other side of fear. — George Addair",
  "Be stronger than your excuses.",
  "Small steps in the right direction can turn out to be the biggest steps of your life.",
  "Don’t limit your challenges. Challenge your limits.",
  "Work hard in silence, let your success make the noise. — Frank Ocean",
  "Your only limit is your mind.",
  "It always seems impossible until it’s done. — Nelson Mandela",
  "The secret of getting ahead is getting started. — Mark Twain",
  "Consistency turns average into excellence.",
  "You don’t find willpower, you create it.",
  "Push yourself, because no one else is going to do it for you.",
  "Fall seven times, stand up eight. — Japanese Proverb",
  "Progress, not perfection.",
];

// ab hame chahate hai ki koi button ho jise jab hame click kare sirf aur sirf tab
// quote change ho
// iske liye hi hamara events game ma aaya tha

// 1. element select karta hai jise change karna ha
// const btn = document.querySelector("button");

// document.addEventListener("keyup", () => {
//   const q = document.getElementById("quote");
//   const index = Math.floor(Math.random() * quotes.length);
//   q.textContent = quotes[index];
// });
// hamara pass mounse Event aur bhi hote ha click ke sath sath
// 1. Click => Ek click ma baat ban jati ha
// 2. dblclick => Double bar click karna padhta ha event happen karana ke liye
// 3. mousemove => agar document per lagainge toh toh pura page ma kahi bhi mouse movement se changes honge
// agar button per lagainge toh sirf button per movement se changes honge
// 4. mouseover => Jab jab iske uper se mouse lekar jainge toh hamara changes aainge

// Keyboard Listner
// 1. KeyDown => Jab tak key ko press kiya hua ha tab tak changes honge
// 2. KeyUp => Jab hame key ko release karenga tab tab changes honge

// Event Objects
// Ye object sari information store karke rakhat hai
// 1. event
// 2. event.target
// 3. event.key
// 4. event.type
// 5. event.clientX
// 6. event.clientY

const button = document.getElementById("button");

// document.addEventListener("click", (event) => {
//   // console.log(event);
//   // console.log(event.target);
//   // console.log(event.type);
//   // console.log(event.clientX);
//   // console.log(event.clientY);
//   const quote = document.getElementById("quote");
//   const index = Math.floor(Math.random() * quotes.length);
//   quote.textContent = quotes[index];
// });

// Mann lo hame specific hona ha ki bhai jab ma enter per click karu sirf tabhi event sune toh
document.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    const quote = document.getElementById("quote");
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index];
  }
});
