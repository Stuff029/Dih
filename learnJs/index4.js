import {PI, getCircumfrence} from "./math-util.js"

console.log(PI)
console.log(getCircumfrence(22))

try {
    console.log(x)
    //network errors
    //promise rejections
    // security errors
}
catch(error) {
    console.error(error)
    //throw new Error("");
}
//errors usually stop the flow of the program
//this catches error and program keeps on moving
finally {
    console.log("this always executes")
}
// to purposefully throw a error do, throw new error

// DOM - Document object model
//Mouse events
const myBox = document.getElementById("myBox")
//myBox.addEventListener("click", event => event.target.style.backgroundColor = "red")
//myBox.addEventListener("mouseover", event => event.target.style.backgroundColor = "green")
//myBox.addEventListener("mouseout", event => event.target.style.backgroundColor = "blue")

// Key events

document.addEventListener("keydown", event => {
    if (event.key == "k") {
        myBox.style.color = "purple"
    }
})

// destructuring
// [] for object destructuring and {} for array destructuring
let a = 1
let c = 2;

[a, c] = [c, a]; // switches values

const colors = ["green", "red", "blue", "yellow", "pink"];

[colors[0], colors[4]] = [colors[4], colors[0]]; // reverses order

const [firstColor, secondColor, thirdColor, fourthColor, fifthColor] = colors
//assigns each color to a variable

const person1 = {
    firstName: "Anih",
    lastName: "Pide",
    age: 36,
    employed: true,
}
const {firstName, lastName, age, employed} = person1;
console.log(firstName); 

function displayPerson ({firstName, lastName, age, employed}) {
    console.log(`${firstName} ${lastName}`)
}

displayPerson(person1)
// callback hell

function task1(callback) {
  setTimeout(() => {console.log("Task 1"); callback()}, 2000);
}
function task2(callback) {
    setTimeout(() => {console.log("Task 2"); callback()}, 500)
}
function task3(callback) {
  setTimeout(() => {console.log("Task 3"); callback()}, 3000);
}
function task4(callback) {
  setTimeout(() => {console.log("Task 4"); callback()}, 1500);
}
function runTasks () {
    task1(() => 
        task2(() => 
            task3(() => 
                task4(() => 
                    doChores()
    ))))
}
// promise -  an object that manages asynchrous operations

function walkDog () {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve("Dog Walked");
            } else {
                reject("You didn't walk the dog");
            }
        }, 1500)
    );
}
function cleanKitchen () {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned) {
                resolve("Kitchen Cleaned");
            } else {
                reject("Kitchen not cleaned");
            }
        }, 2500)
    );
}
function trash () {
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            const trashTakenOut = true;
            if (trashTakenOut) {
                resolve("Trash taken out");
            } else {
                reject("Trash not taken out");
            }
        }, 500)
    );
}
/*
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return trash()})
         .then(value => {console.log(value); console.log("chores done")})
         .catch(error => console.log(error));
*/
//Async - makes a function return a promise
//Await - makes a aysnc function wait for a promise

async function doChores() {
    try {
        const dogWalkResult = await walkDog(); // waits resolve or reject
        console.log(dogWalkResult)

        const kitchenCleanedResult = await cleanKitchen();
        console.log(kitchenCleanedResult)

        const trashTakenOutResult = await trash();
        console.log(trashTakenOutResult)
    }
    catch(error) {
        console.log(error)
    }
}
//doChores()
// changed code a bit up, i made doChores and runTasks synchronous
//runTasks()

// JSON

const names = ["Anih", "Suh", "Shak", "Rishi"]
const jsonString = JSON.stringify(names) //  converts JS object into JSON object
const jsonNames = JSON.parse(jsonString) // converts JSON object into JS object
/*
fetch("person.json")
    .then(respone => respone.json()) // fetch returns a promise becuase it cant immediatly
    .then(value => console.log(value))// return the data
    .catch(error => console.log(error))
*/
// .json same as .parse but does more under the hood
// (cleans up all the extra stuff we recieve)
// api
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(respone => respone.json()) //  promise based
    .then(data => console.log(data.weight))
    .catch(error => console.log(error));
*/
async function fetchData() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

        if (!response.ok) {
            throw new Error("Cannot fetch pokemon data")
        }
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}
fetchData()