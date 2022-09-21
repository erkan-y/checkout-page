// * VARIABLES

const bagOrder = document.querySelector(".bag-order");
const shoeOrder = document.querySelector(".shoe-order");

let bagCounter = document.querySelector(".bag-counter");
let shoesCounter = document.querySelector(".shoes-counter");

let subTotal = document.querySelector("#sub-total");
let taxTotal = document.querySelector("#tax-total");
let shipTotal = document.querySelector("#shipping-total");
let total = document.querySelector("#total");

let sub = 0;

const items = document.querySelector(".items");

items.addEventListener("click", function (e) {
  if (e.target.classList.contains("plus")) {
    let counter = Number(e.target.parentElement.textContent);
    if (counter === 3) {
      Swal.fire({
        title: "Hey!",
        text: "Stocks are limited!",
        icon: "warning",
        confirmButtonText: "Cool",
      });
    } else {
      counter++;
      e.target.previousElementSibling.textContent = counter;
    }
  } else if (e.target.classList.contains("minus")) {
    let counter = Number(e.target.parentElement.textContent);
    if (counter > 0) {
      counter--;
      e.target.nextElementSibling.textContent = counter;
    } else if (counter === 0) {
      Swal.fire({
        title: "Hey!",
        text: "it's already zero",
        icon: "warning",
        confirmButtonText: "Cool",
      });
    } else {
      counter--;
      e.target.nextElementSibling.textContent = counter;
    }
  }
  let sub =
    Number(shoesCounter.textContent) * 74.99 +
    Number(bagCounter.textContent) * 54.99;
  let tax = Number(((sub * 18) / 100).toFixed(2));
  let ship = 19;
  let sum = (sub + tax + ship).toFixed(2);

  subTotal.textContent = sub;
  taxTotal.textContent = tax;
  shipTotal.textContent = ship;
  total.textContent = sum;
});

// bagOrder.addEventListener("click", function (e) {
//   if (e.target.classList.contains("plus")) {
//     if (bagCount === 3) {
//       Swal.fire({
//         title: "Hey!",
//         text: "Stocks are limited!",
//         icon: "warning",
//         confirmButtonText: "Cool",
//       });
//     } else {
//       bagCount++;
//       bagCounter.textContent = bagCount;
//     }
//   } else if (e.target.classList.contains("minus")) {
//     if (bagCount > 0) {
//       bagCount--;
//       bagCounter.textContent = bagCount;
//     } else if (bagCount === 0) {
//       Swal.fire({
//         title: "Hey!",
//         text: "it's already zero",
//         icon: "warning",
//         confirmButtonText: "Cool",
//       });
//     }
//   }
// });
// shoeOrder.addEventListener("click", function (e) {
//   if (e.target.classList.contains("plus")) {
//     if (shoeCount === 3) {
//       Swal.fire({
//         title: "Hey!",
//         text: "Stocks are limited!",
//         icon: "warning",
//         confirmButtonText: "Cool",
//       });
//     } else {
//       shoeCount++;
//       shoesCounter.textContent = shoeCount;
//     }
//   } else if (e.target.classList.contains("minus")) {
//     if (shoeCount > 0) {
//       shoeCount--;
//       shoesCounter.textContent = shoeCount;
//     } else if (shoeCount === 0) {
//       Swal.fire({
//         title: "Hey!",
//         text: "it's already zero",
//         icon: "warning",
//         confirmButtonText: "Cool",
//       });
//     }
//   }
// });
