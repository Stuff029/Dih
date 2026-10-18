// ... is spread operator, unpacks elements within a array into induvudual elements

nums = [1,2,3,4,5,6,7]

Math.max(nums) // wont work
Math.max(...nums) // will work and will output 7

user = "AnihPidih"
letters = [...user]
//console.log(letters) // prints ["A", "n", "i", "h"... etc]
letters = letters.join("-")
//console.log(letters)

let fruits = ["apple", "bannana", "coconut"]
let newFruits = [...fruits]//creates an identiacal copy
//console.log(newFruits)

let vegetables = ["zucchini", "raddish", "bottle gourds"]
let foods = [...fruits, ...vegetables]
//console.log(foods)

// rest operator - bundles seperate elements into a single array
// spread operator - expands an array into seperate elements

function fridge(...food) { // also lets in infinite arguements
    console.log(food) // add spread operator to make everything into single elements
    // add ... before food
}

let food1 = "burger"
let food2 = "cheesestick"
let food3 = "pizza" 
let food4 = "cake" 
let food5 = "ramen"

fridge(food1, food2, food3, food4, food5)

function sum(...numbers) {
    let result = 0

    for (i = 0; i < numbers.length; i++) {
        result += numbers[i]
    }
    return result
}

console.log(sum(1,2,4,5))

// callbacks
//made sure something happens after something else
hey(yo)

function hey(callback) {
    console.log("hey")
    callback()
}
function yo() {
    console.log("yoo")
}

//forEach() method is used to iterate over array and apply a function to each of it
// element, index, and array are provided

let numbs = [1,2,3,4,5,6,7]

numbs.forEach(double);
numbs.forEach(display);

function display(elements) {
    console.log(elements)
}
function double(element, index, array) {
    array[index] = element * 2
}

// same as forEach method except returns a new array

let nums1 = [1,2,3,4,5,6]
let nums11 = nums1.map(square)
function square(element) {
    return Math.pow(element, 2)
}
console.log(nums11)

//creates new array by filtering out elements
let evenNums = numbs.filter(isEven)
console.log(evenNums)
function isEven(element) {
    if (element % 2 ==0) {
        return element
    }
}

// .reduce() reduces all elements within array to a single value

const prices = [2, 30, 999, 47, 12, 75, 32, 7]
const total = prices.reduce(sumFunc)
//console.log(total)

function sumFunc(prevous, next) { // 0+2 then 2+30 then 32+999 then etc
  return prevous + next; // prevous + next becomes the next prevous number
}

setTimeout(function() {
    console.log("hezi")
}, 3000) // executes function1 after 3000 ms

let hello = function() {
    console.log("hello")
}



// arrow function is a consice way to write a function expression that you only use once
//(paramaters) => some code
const heyy = () => console.log("hello")
heyy()

setTimeout((name) => {
    console.log(name)
}, 3000);
//if u pass console.log directly w/o making it a func then it wont wait 3000 seconds

