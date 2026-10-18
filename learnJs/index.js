//console.log("sss");
//console.log("shshssss");

//window.alert("This is a alert");

//document.getElementById("H1").textContent = "Welcome";
//document.getElementById("p1").textContent = "I like bob";

//let x;
//x = 100;
//let money = 10000;

//console.log(`You have ${money} dollars in you bank acount`);

//let fullName = "Anih Pidi";
//let age  = 24;
//let student = false;

//document.getElementById("p1").textContent = fullName;
//document.getElementById("p2").textContent = age;
//document.getElementById("p3").textContent = student;

//let user

//let age = "5";

//age  = Number(age);

//user = window.prompt("Whats ur user?");

//document.getElementById("submitButton").onclick = function(){
    //user = document.getElementById("userInput").value;
    //document.getElementById("H1").textContent = user;
//}


const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");
const countLabel = document.getElementById("countLabel");

let count = 0

increaseButton.onclick = function() {
    count++;
    countLabel.textContent = count; 
}

decreaseButton.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetButton.onclick = function() {
    count = 0;  
    countLabel.textContent = count;
}

if (x == 1) {

}
