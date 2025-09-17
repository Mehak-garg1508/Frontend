// // // Jab ek hi ticket hoti ha aur bhut sara logo na use purchase kari
// // // Toh use ticket ko vo insaan leta ha jisne sabse pehle book ki hogi.
// // // Yaha per date vala object bhut kaam aata ha

// // const d = new Date();
// // console.log(d);
// // // DAteTimeZone International
// // console.log(d.toDateString());
// // console.log(d.toString());
// // console.log(d.toISOString());

// // console.log(d);
// // // Object type ka ha
// // console.log(typeof d);
// // // Ye kaha se date la raaha ha
// // // Hardware clock ie system se puch kar bata raaha ha ye time

// // const d1 = new Date(1000);
// // // 1970 se calculate karta ha ye date ko
// // // console.log(d1);
// // // // use time pe ye system develop hone chalu hua tha isliye
// // // const d2 = new Date(2000);
// // // console.log(d2);
// // // // jo value Date() ma pass hua ha vo milisecond ma hogi
// // // const d3 = new Date(2002222982672);
// // // console.log(d3);

// // console.log(d.getDate());
// // console.log(d.getDay());
// // // Sun, Mon, Tue, Wed, Thu, Fri, Sat
// // // 0 , 1, 2, 3, 4, 5, 6
// // console.log(d.getMonth());
// // // Jan, Feb, Mar, ...
// // // 0, 1, 2, ...
// // console.log(d.getFullYear());
// // console.log(d.getMilliseconds());
// // console.log(d.getMinutes());
// // console.log(d.getHours());
// // console.log(d.getSeconds());
// // // milisecond bataiga calculate karke 1jan 1970 se
// // console.log(d.getTime());
// // // ise bhi milisecond ma hi milega
// // // uper se neche ana ma kuch time laga hoga isliye getTime() aur now() ma farak
// // const now = Date.now();
// // console.log(now);

// // Khud ki custom date bhi dal sakta ha
// // Jab string ma date hogi tab 10 normal 10th month ko hi represent kar raaha hoga
// // T ke baad time chalu ho gya
// // 10 bjke 10 min 14 sec
// // const d = new Date("2022-10-20T10:10:14");
// // console.log(d);
// // console.log(d.toDateString());
// // Number ki form ma ha toh 0 based indexing follow hoga
// // this means 4 vala may ie 5th month ko represent kar raaha ha
// // year / month / date / hour / minute / second / milisecond
// // 7 values can be given
// // do value dena compulsory ha
// // Ek value denga toh vo milisecond consider hoga
// // const date = new Date(2024, 4, 28);
// // console.log(date.toDateString());
// // Number: 0 based start honge
// // String: 1 based start honge

// // Setting date components
// const d = new Date();
// d.setDate(20);
// d.setFullYear(2021);
// d.setMonth(3);
// console.log(d);
// console.log(d.toDateString());
// console.log(d.toLocaleDateString());

// // date calculation
// const date1 = new Date();
// const date2 = new Date("2026-04-21");
// // result in millisecond difference between dates
// console.log(date2 - date1);
// console.log(date1 < date2);
// console.log(date1 > date2);

// // CountDown Timer for olympics
// Days, hours, minutes, seconds
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");
const date = date2 - date1;
const days = Math.floor(date / (1000 * 60 * 60 * 24));
// console.log(days);
const hours = Math.floor((date / (1000 * 60 * 60)) % 24);
// console.log(hours);
const minutes = Math.floor((date / (1000 * 60)) % 60);
// console.log(minutes);
const second = Math.floor((date / 1000) % 60);
// console.log(second);

console.log(
  `Olympic CountDown timer:- Days: ${days} hours: ${hours} minutes: ${minutes} seconds: ${second}`
);
