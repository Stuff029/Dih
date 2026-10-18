// Js objects- same thing as python dictionaries
// this- refers to the object in the immediate context
const person1 = {
  firstName: "Anih",
  lastName: "Pidih",
  age: 30,
  jobless: true,
  sayHello: () => console.log("Hey, I am Anih"),
};
const person2 = {
  firstName: "Shak",
  lastName: "meegs",
  age: 77,
  jobless: false,
  sayHello: function () {
    console.log(`Hey, I am ${this.firstName}`);
  },
};
// this doesnt work with arrow functions

console.log(person1.jobless);
person1.sayHello();
person2.sayHello();

// constructor - special method for defining methods and properties of objects
//initiliazes object

function car(make, model, year, color) {
  ((this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color));
  this.drive = function () {
    console.log(`You drive a ${this.make} ${this.model}`);
  };
}

const car1 = new car("Ferrari", "812 Superfast", 2027, "red");
console.log(car1.model);
car1.drive();

//classes provide a cleaner and more structuered way to work with objects

class product {
  constructor(name, price) {
    // intialzes product
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price}`);
  }
}

const product1 = new product("shoe", 299.99);
product1.displayProduct();

// static - keyword that defines properties or methods that belong to the class rather
// than too objects

class mathUtil {
  static PI = 3.14159;

  static getC(radius) {
    return radius * this.PI;
  }
}
console.log(mathUtil.getC(2));

class users {
  constructor(username) {
    this.username = username;
  }

  sayHello() {
    console.log(`Hi, this is ${this.username}`);
  }
}

const user1 = new users("Shady");
user1.sayHello();

// inheritance, everything in parent class passes down to childrne to save on lines

class Animal {
  // parent class
  alive = true;

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

class Rabbit extends Animal {
  // children class
  name = "rabbit";

  run() {
    console.log(`${this.name} is running.`);
  }
}
class Hawk extends Animal {
  name = "hawk";
  fly() {
    console.log(`${this.name} is flying.`);
  }
}

const rabbit = new Rabbit();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
hawk.sleep();
rabbit.run();
hawk.fly();

// super keyword used in all classes to access properties or methods of a parent
class Animals {
  constructor(name, age) {
    // initilizes name and age for all children
    this.name = name;
    this.age = age;
  }

  move(speed) {
    //  initialzes a func for a children to use
    console.log(`${this.name} is moving at ${speed} mph`);
  }
}
// you can give the parent repeating initilization functions, just make sure to call super
class Fish extends Animals {
  constructor(name, age, swimspeed) {
    super(name, age);
    this.swimspeed = swimspeed;
  }

  swim() {
    console.log(`${this.name} is swimin`);
    super.move(this.swimspeed);
  }
}

class Mole extends Animals {
  constructor(name, age, digspeed) {
    super(name, age);
    this.digspeed = digspeed;
  }

  dig() {
    console.log(`${this.name} is diggin`);
    super.move(this.digspeed);
  }
}

const fish = new Fish("Jerry", 7, 22);
const mole = new Mole("Digly", 2, 6);
console.log(mole.digspeed);
mole.dig();
fish.swim();

//nested objects

const person = {
  name: "Anih Pede",
  age: 22,
  isStudent: true,
  hobbies: ["coding", "chess", "reading"],
  address: {
    street: "318 Rafferty Ct",
    city: "Franklin",
    country: "USA",
  },
};
console.log(person.name);
console.log(person.hobbies[2]);
console.log(person.address.city);

// sort method- sorts array in lexographic order
let nums = [1, 20, 22, 11, 4, 7, 16, 77, 8, 9, 3];
// wont sort in least to greatest because it sorts in lexographic order
nums.sort();
console.log(nums);
nums.sort((a, b) => a - b); // if neg then it stays the same, if pos the 2 numbers swap
console.log(nums);

// dates
//Date(year, month, day, hour, minute, seconds, ms)
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
console.log(date);

// closure- function defined in another function, allows for private variables and
// state mantinence and security becuase you cant change variables on inside

function createCounter() {
  let count = 0;
  function incremenet() {
    count++;
    console.log("Count was incremented");
  }

  return { incremenet };
}

const counter = createCounter();

counter.incremenet();
console.log(counter.log);

// setTimeOut func is like a wait func
//assign to variable to cancel it later
const timeout = setTimeout(() => console.log("he"), 3000);
clearTimeout(timeout) //  stops it
const interval = setInterval(() => console.log("ss"), 1000) // repeats it every 100 seconds
