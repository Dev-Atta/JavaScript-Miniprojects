// document.getElementById("count-el").innerText = count;


// THE DOM
// document object model
// document.getElementById("count-el").innerText = 5;




// let count = 0;
// count += 1 ;

//  let firstBatch = 5;
//  let secondBatch = 7;
//  let count = firstBatch + secondBatch;


// let myAge = 25;
// let humanDogRatio = 7;
// let dogAge = myAge * humanDogRatio;
// console.log(dogAge);


// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);   
// }


// function fortytwo() {
//     console.log(42);
// }
// let lap = 0;
// function LAPCOUNT() {
//     lap += 1;
//     document.getElementById("countdown-el").innerText = lap;
// }




let countel = document.getElementById("count-el");
let saveel = document.getElementById("save-el");

let count = 0;
function increment() {
  count += 1;
   countel.innerText = count;
}

function save() {
  let savenum = count;
  saveel.innerText += " " + savenum + " - ";
}



// function user() {
//     let username = "John";
//     document.getElementById("user-el").innerText = username;
//     let msg ="Welcome back, ";

//     let msgtousr = msg + username;
//     document.getElementById("msg-el").innerText = msgtousr;
//     console.log(msgtousr);
  
// }
// String always win between text and string

// let welcomeel = document.getElementById("welcome-el");

// let name = "John";
// let greeting = "Hey yooo wsssup , ";

// welcomeel.innerText = greeting + name;

// welcomeel.innerText += " 👋";




