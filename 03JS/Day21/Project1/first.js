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

function generator() {
  const quote = document.getElementById("quote");
  const index = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[index];
}
setInterval(generator, 2000);

function background() {
  const color = document.getElementById("body");
  const random1 = Math.floor(Math.random() * 255);
  const random2 = Math.floor(Math.random() * 255);
  const random3 = Math.floor(Math.random() * 255);
  color.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
}
setInterval(background, 3000);
