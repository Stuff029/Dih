const subscribeButton = document.getElementById("subscribeButton");
const visaButton = document.getElementById("visaButton");
const mastercardButton = document.getElementById("mastercardButton");
const applepayButton = document.getElementById("applepayButton");
const submitButton = document.getElementById("submitButton");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

let z = 3;

submitButton.onclick = function () {
  if (subscribeButton.checked) {
    subResult.textContent = "You are subscribed";
  } else {
    subResult.textContent = "You are not subscribed";
  }

  if (visaButton.checked) {
    paymentResult.textContent = "You are paying with Visa";
  } else if (mastercardButton.checked) {
    paymentResult.textContent = "You are paying with Mastercard";
  } else if (applepayButton.checked) {
    paymentResult.textContent = "You are paying with Apple Pay";
  } else {
    paymentResult.textContent = "You must choose a payment method";
  }
};

switch (z) {
  case 1:
    console.log("hey");
    break;
  case 3:
    console.log("22");
    break;
}

//string methods(their are more)
let user = "tipsqeezer3000  ";
console.log(user.charAt("s"));
console.log(user.indexOf("p"));
console.log(user.lastIndexOf("e"));
console.log(user.length);
console.log(user.trim("s"));
console.log(user.toUpperCase());
console.log(user.toLowerCase());
console.log(user.repeat(4));
//string slicing
const fullName = "anih pidih";

console.log(fullName.slice(0, 5));

console.log(fullName.slice(0, fullName.indexOf(" ")));

let y = 3;

//while (y == 3) {
//do etc
//}

//do {
// runs this line befor elooking at while loop and following that
//} while (y == 3)

for (let i = 0; i < 3; i++) {
  console.log(i);
}
// use continue to skip over a iteration
// use break to break out of the loop
for (let x = 0; x < 21; x++) {
  if (x == 13) {
    continue;
  } else {
    console.log(x);
  }
}

function yay(x) {
  console.log(x);
}

function add(x, y) {
  result = x * y + x + y;
  return result;
}

let array = ["apple", "bannnana", "coconut"];
array.push("dragonfruit"); // add element to end
array.pop(); // remove last element
array.shift(); // remove elemnt from beggingnig
array.unshift("oranges"); //add element to beginingi
let length = array.length;
let index = array.indexOf("bannnana");
console.log(index);

array.sort(); // sorts in alphabetical order do .reverse to switch it

// logical operators
// && and
// || or
// ! not
// = assignment operator
// == comparison operator
// === strict equality operator(value and datatype are equal)
// != inequality operator
// !== strict inequality operator
