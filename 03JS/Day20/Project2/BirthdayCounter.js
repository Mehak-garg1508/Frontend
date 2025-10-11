// How much days, hours, minute, second are left for birthday?
function left() {
  const date1 = new Date();
  const date2 = new Date("2025-11-16T00:00:00");
  const date = date2 - date1;
  const days = Math.floor(date / (24 * 60 * 60 * 1000));
  // console.log(days);
  const hours = Math.floor((date / (1000 * 60 * 60)) % 24);
  // console.log(hours);
  const minutes = Math.floor((date / (1000 * 60)) % 60);
  // console.log(minutes);
  const seconds = Math.floor((date / 1000) % 60);
  // console.log(seconds);
  // console.log(`CountDown For Megha's Birthday`);
  const timer1 = document.getElementById("days");
  timer1.innerHTML = days + "days ";

  const timer2 = document.getElementById("hours");
  timer2.innerHTML = hours + " : ";

  const timer3 = document.getElementById("minutes");
  timer3.innerHTML = minutes + " : ";

  const timer4 = document.getElementById("seconds");
  timer4.innerHTML = seconds + "";
}

// left();
setInterval(left, 1000);

// CSS Property
const com = document.getElementById("complete");
com.style.display = "flex";
com.style.fontSize = "200px";
com.style.height = "100vh";
com.style.alignItems = "center";
com.style.justifyContent = "center";
com.style.flexDirection = "column";

const comTime = document.getElementById("time");
comTime.style.display = "flex";
comTime.style.fontSize = "150px";
comTime.style.flexDirection = "row";
