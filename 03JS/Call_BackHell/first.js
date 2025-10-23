// Call Back Hell
// Zomato App Creation

// function placeOrder(callback) {
//   console.log("Payment is in progress");
//   setTimeout(() => {
//     console.log("Payment is received and order get placed");
//     callback();
//   }, 3000);
// }

// function preparingOrder(callback) {
//   console.log("Your food prepartion started");
//   setTimeout(() => {
//     console.log("Your order is now prepared");
//     callback();
//   }, 3000);
// }

// function pickOrder(callback) {
//   console.log("Delievery Boy is on way to pickup order");
//   setTimeout(() => {
//     console.log("I have picked up the order");
//     callback();
//   });
// }

// function delieveryOrder() {
//   console.log("I am on way to deliever order");
//   setTimeout(() => {
//     console.log("Order delievered successfully");
//   });
// }

// JS by default placeorder per jaiga 1st statement print karega
// fir second ma dekhaga ki setTimeOut ha 3sec ka toh fir preparingOrder
// per chala jaiga aur uski 1st statement print hogi aur fir second setTimeout check hogi
// Lakin hame chahie tha ki pehle payment confirm ho jai fir order ke preparations
// se related messages send ho
// placeOrder();
// preparingOrder();

// Toh isliye uper vali problem ko solve karna ke liye hame ye choose kiya ha
// placeOrder(preparingOrder);

// Neche vali statement hame error degi
// Kyuki preparingOrder() khud ek function call ha toh vo error dega
// placeOrder(preparingOrder(pickOrder));

// Ab dikat ko solve karna ke liye hamara Call Back Hell use ma aaiga
// placeOrder(() => {
//   preparingOrder(() => {
//     pickOrder(() => {
//       delieveryOrder();
//     });
//   });
// });

// Ise sari problem resolve ho gai
// Call Back ki dikat hi yahi ha ki usko create karna hi itna mushkil ho jata ha
// Code readability kharab hoti ha call back hell ma
// Dusri dikat debugging ma aati hai
// Kisi bhi function ma error aa sakti ha
// Kis level per dikat hui ha toh debugging ma dikat hogi
// 3. Inversion of control
// Ye jo code hai aalag aalag file ma ho sakta hai
// toh agar ek file ma bhi dikat hui sari file fail ho jaiga
// Jesa kisi ma call back function ko likhna bhul gai
// i.e. Call karna hi bhul gai function ko

const orderDetail = {
  orderId: 12345,
  food: ["Pizza", "Burger", "Coke"],
  cost: 620,
  custmer_name: "Megha",
  customer_location: "Karnal",
  resturant_location: "Panipat",
};

function placeOrder(orderDetail, callback) {
  console.log(`Rs ${orderDetail.cost} Payment is in progress`);
  setTimeout(() => {
    console.log("Payment is received and order get placed");
    callback(orderDetail);
    orderDetail.status = true;
  }, 3000);
}

function preparingOrder(orderDetail, callback) {
  console.log(`Your food prepartion started ${orderDetail.food}`);
  setTimeout(() => {
    console.log("Your order is now prepared");
    callback(orderDetail);
    orderDetail.token = 123;
  }, 3000);
}

function pickOrder(orderDetail, callback) {
  console.log(
    `Delievery Boy is on way to pickup order from ${orderDetail.resturant_location}`
  );
  setTimeout(() => {
    console.log("I have picked up the order");
    callback(orderDetail);
    orderDetail.received = true;
  });
}

function delieveryOrder(orderDetail) {
  console.log(
    `I am on way to deliever order to ${orderDetail.customer_location}`
  );
  setTimeout(() => {
    console.log("Order delievered successfully");
    orderDetail.delievered = true;
  });
}

placeOrder(orderDetail, (orderDetail) => {
  preparingOrder(orderDetail, (orderDetail) => {
    pickOrder(orderDetail, (orderDetail) => {
      delieveryOrder(orderDetail);
    });
  });
});
