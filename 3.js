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



// let ert = document.getElementById("box_operer");

// ert.addEventListener("click", function(){
//    console.log("I am openeing tge box");
// })


// addEventListerner is Also a Way to get hold of AN Event being
// envoked such as "click"

// let can be Reassigned
// const cannot be reassigned

// const inputEl = document.getElementById("taking");
// const inputbtn = document.getElementById("input_button");

// .value is the key to take input from input element in javascript


    //   list_items += "<li> <a href=" + my_lead[i] +" target='_blank' >" + my_lead[i] + "</a></li>";
 
 // String Template
 
//     for (let i = 0; i < my_lead.length; i++){
//         list_items += `
// <li>
// <a href="${my_lead[i]}" target="_blank">${my_lead[i]}</a>
// </li>`;
//     }
// // now list_items contain <li>Google</li><li>Youtibe</li><li>Twitter</li>
// ul_el.innerHTML = list_items;

 
//}



// Intracting With local Storage
// localStorage.setItem("my_lead", "www.google.com");  // Give www.google.com in local Storage using key value pair
// console.log(localStorage.getItem("my_lead")); // Getting things stored on Local Stroage


// Practice 
// let a;
// windows.localStorage onlu support Strings 
// localStorage.setItem("a","www.youtube.com");  // a is key, link is value
// console.log(localStorage.getItem("a"));
// localStorage.clear("a");



// let my_lead = '["MyKabtoor"]';

// my_lead = JSON.parse(my_lead); //JSON.parse() converts a JSON-formatted string into a JavaScript value (object, array, string, number, boolean, or null).

// my_lead.push("Kabtoor2");

// my_lead = JSON.stringify(my_lead); //JSON.stringify(), which converts a JS value into a JSON string:

// console.log(my_lead)

// console.log(typeof my_lead)

// Intracting With local Storage

// localStorage.setItem(key value pair)
// used to set something on LOCAL storage



// Premeter testing

// function greetUser(name, greet){
//     let n = `${greet}, ${name}`;
//     console.log(n);
// } 

// greetUser("boy", 'hello');

// let array = ["e1","e2"];

// function first(a){
//     let n = a[0];
//     console.log(n);
// }

// first(array);

 // list_items += "<li> <a href=" + my_lead[i] +" target='_blank' >" + my_lead[i] + "</a></li>";
 // String Template
 // now list_items contain <li>Google</li><li>Youtibe</li><li>Twitter</li>


 
// // Tabs array with object
// const tabs = [
//     {url : "AttaLinkedin"}
// ]


// tabbtn.addEventListener("click", function(){
//     // Grabing current url
//     // Chorme object give us tab and our query 
//     // active: true gives is our tab open
//     // currentWindow: true Give Current window
//     // function (tabs) is a function Found IF ALL TURE
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        
//     my_lead.push(tabs[0].url)
//      localStorage.setItem("my_lead", JSON.stringify(my_lead));
    
//      render(my_lead);
//     });

   

    // my_lead.push(tabs[0].url)
    // localStorage.setItem("tabs",JSON.stringify(my_lead))
    
    // render(my_lead);
// })
