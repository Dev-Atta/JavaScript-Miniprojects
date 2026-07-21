// git add .
// git commit -m "describe what you changed"
// git push



// Understanding Arrays 

// let test_array = ["Tumble pop", "Cpi comovemnt"];
// No need To deifne size

// let experience = ["Front end", " Back end", "Real"];
// console.log(experience[0]);
// console.log(experience.length); // .lenght Gives size of Array


// let me = ["ATTA" , 20 , false];
// console.log(me[0],me[1],me[2]); // Array can hold Multiple Data tYpes 


// me.push("pineapple");  //.push() Append new thing in the array and Increase Its size also
// console.log(me);  

// me.pop("pineapple"); //.pop() Remove elements from array


// Understaing Loops

// for (let count = 1 ; count < 11 ; count+=1){
//     console.log(count);
// }

// Loops with array

// for (let i = 0 ; i < test_array.length ; i++){
//     console.log(test_array[i]);
// }


// Gretting Render
// let greet_array = ["Hello", "My" , "Name" , "Is" , "Atta"];
// let greet = document.getElementById("greeting");
// for(let i = 0 ; i < greet_array.length ; i++){
//     greet.textContent += greet_array[i] + " ";
// }




// Storing variable function inside a variable 
// let p1 = 102;
// let p2 = 103;

// function getfastest(){
//     if (p1 > p2 ) return p1;
//     else if (p2 > p1) return p2;
//     else return p1;
// }

// let fastest_race_time = getfastest();
// console.log(fastest_race_time);


// Random GeneRator Practice 
// function Roll_dice(){
//     let n = 6;
//     n = (Math.random()*6)+1;
//     n = Math.floor(n);
//     return n;
// }

// console.log(Roll_dice());


// making Classes/Objects
// no use of "let"
// = become :
// ; become ,

// Obejcts store data in key value pairs


// let course = {
//     name : "Learn JavaScript",
//     lessons : 16,
//     creator : "Atta",
//     length : 63,
//     level : 2,
//     is_free : true,
//     tags : ["html", "css", "js"]
// }

// console.log(course.tags);

// Practicing Air Bnb object castle listing

// let listing = {
//     name: "Blue Castle",
//     price: 190,
//     is_available: true,
//     features: ["pool", "worker space", "wifi"],
// }

// using dot notation to access the data
// console.log(listing.name);
// console.log(listing.price);
// console.log(listing.is_available);
// console.log(listing.features[0]);


//let card1 = document.getElementById("cards1");
//let card2 = document.getElementById("cards2");


// querySlector is Used in Broader Terms to ask for something
// . for class and # for Id

// While get Elem


// for (let i = 0; i < cards.length ; i++ ){
//     cards[i] = random_card();
// }
 //sum = cards[0] + cards[1];


// let Full = document.getElementById("full");

// let f = "linda";
// let l = "hi there";
// let fullname = " \" " + l  + " " + f;

// Full.innerText = fullname;


// let point = document.getElementById("points");

// let count = 0;
// function increase(){
//     count = count +1;
//     point.innerText = count;
// }

// function decrease(){
//     count = count -1 ;
//     point.innerText = count;
// }


// let flag = document.getElementById("Display");
// let msg =" Sorry! Out of stock";

// function error(){
//    flag.textContent = msg;
// }


// script tag
// variables
// numbers
// strings
// console.log()
// functions
// The DOM
// getElementById()
// innerText
// textContent

//Learnings


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


// textContent - gets/sets all text, even hidden stuff (display:none). Faster.
// innerText - gets/sets only visible text (what user actually sees on screen). Slower (checks CSS).

// Rule of thumb: Use textContent by default. Use innerText only when visibility matters.



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


// let person = {
//     name: "Atta",
//     age: 25,
//     country: "Pakistan",
//     greet: function(){
//         console.log("Hello, my name is " + person.name + " and I am " + person.age + " years old from " + person.country + ".");
//     }
// }

// person.greet();


// let largest_country = ["Telgu", "India", "USA", "Indonesia", "iran"];
// largest_country.push("Kambodia");
// largest_country.pop("Kambodia");
// for (let i = 0 ; i < largest_country.length; i++) {
//     //console.log(largest_country[i]);
// }



// Unshift() add new elements to the front of array and increases the lenght of Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple");
// for (let i = 0 ; i <fruits.length; i++) {
//     console.log(fruits[i]);
// }


// shift() Removes the first element of Arrau
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// for (let i = 0 ; i <fruits.length; i++) {
//      console.log(fruits[i]);
//  }



// largest_country.shift();          // Removes First Elemnet
// largest_country.unshift("China");  // Add China To the first
// largest_country.pop("iran");  // remove iran
// largest_country.push("Pakistan"); // Append Pakistan to last

// umshift makes the array logner while shift makes arrya shorter

// for (let i = 0 ; i < largest_country.length; i++) {
//     console.log(largest_country[i]);
// }



// let game = ["Rock" , "Paper" , "Scissor"];

// function rand(){
//     let n = 3;
//     n = Math.random()*n;
//     n = Math.floor(n);
//     return n;
// }

// function flow() {
//     let human = "Paper";
//     let computer = rand();
    
//      let computerChoice = game[computer];
//     if (human === computerChoice) {
//         console.log("It's a tie!");
//     } 
//     else if (
//         (human === "Rock" && computerChoice === "Scissor") ||
//         (human === "Paper" && computerChoice === "Rock") ||
//         (human === "Scissor" && computerChoice === "Paper")
//     ) {
//         console.log("Human wins!");
//     } 
//     else {
//         console.log("Computer wins!");
//     }
// }


// flow();
// console.log(random());
const but = document.getElementById("conatiner");

but.innerHTML = "<button onclick='buy()'> Buy here </button>"


// Thanking User after he buy

function buy(){
    but.innerHTML += "<p> Thanks For Buying </p>";
}


// Create Elment 
// Set text Content 
// append content

// const li = document.createElement("li");   // we have taken li html attribute by using create elemnt 
// li.textContent = array[i]; // Keeping array elements in it
// ul_el.append(li); // Appending it where we need


//    for (let i = 0 ; i < my_lead.length ; i++){
//      const li = document.createElement("li");
//      li.textContent = my_lead[i];
//      ul_el.append(li)

//      // or ul_el.innerHtml() += my_lead[i];
//     }

// const cannot be reassigned
// .value is the key to take input from input element in javascript
// .innerHtml is used to Add Html inside JavScript USING ""
// ul_el.innerHtml() += my_lead[i];

// Another solution of this problem can be done using
// create element 
// Set text contemt
//  Append To ul
//      const li = document.createElement("li");
//      li.textContent = my_lead[i];
//      ul_el.append(li)



//for (let i = 0 ; i < my_lead.length ; i++){
 //   list_items += "<li> <a href=" + my_lead[i] +" target='_blank' >" + my_lead[i] + "</a></li>";
 
 // or sceond way
 // String Templat
 
// list_items += `
// <li>
// <a href="${my_lead[i]}" target="_blank">${my_lead[i]}
// </a>
// </li>`;
 



// Template stings


// const recpient = "John";

// const email = "Hey " + recpient + "! How is It going? Cheers Per"

// // in template String
// const email = 'Hey ${recpient}! How is It going? Cheers Per'
