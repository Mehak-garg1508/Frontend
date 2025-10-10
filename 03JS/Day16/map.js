// Map
// Key : value pair accept karta ha
// Key should be unique in this
const map1 = new Map();
map1.set(3, 90);
map1.set("Mohan", 67);
map1.set("shobit", 45);
console.log(map1);

// agar hame key value pair same pass karenga
// toh vo value update kar dega duplicate nhi banaiga
map1.set("shobit", 20);
console.log(map1);

// delete
map1.delete("shobit");
console.log(map1);

// size
console.log(map1.size);

// has
console.log(map1.has("Pulkit"));
console.log(map1.has(3));

console.log(Map.prototype);

map1.clear();
console.log(map1);

// Method 2 of creating map
const map2 = new Map([
  [4, "hi"],
  [5, "hello"],
  [3, "namaste"],
  [6, "Jai Shree Ram"],
  [8, "Radhe Radhe"],
]);

console.log(map2);

// Iteration over map
// for of loop
for (let value of map2) {
  console.log(value);
}

for (let [key, value] of map2) {
  console.log(key, value);
}

// for each using
// const ip = [...map2].flat(Infinity);
// console.log(ip);
const ip = [...map2];
console.log(map2);
const [key, value] = ip;
const result = ip.forEach(([key, value]) => {
  console.log(key, value);
});
console.log(result);
