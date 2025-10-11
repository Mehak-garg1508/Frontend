function timing() {
  const timer = document.getElementById("root");
  // Pura time bataiga detail ma
  const now = new Date();
  // Local India ka time dega
  const IndianTime = now.toLocaleTimeString();
  timer.innerHTML = IndianTime;
}

// har 1 second baad repeat karo
setInterval(timing, 1000);

// Kuch css properties apply kare hai
const timer = document.getElementById("root");
timer.style.fontSize = "150px";
timer.style.height = "100vh";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
