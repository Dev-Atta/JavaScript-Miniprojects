
// Understanding Arrays 

let test_array = ["Tumble pop", "Cpi comovemnt"];
// No need To deifne size

let experience = ["Front end", " Back end", "Real"];
console.log(experience[0]);
console.log(experience.length); // .lenght Gives size of Array


let me = ["ATTA" , 20 , false];
console.log(me[0],me[1],me[2]); // Array can hold Multiple Data tYpes 


me.push("pineapple");  //.push() Append new thing in the array and Increase Its size also
console.log(me);  

me.pop("pineapple"); //.pop() Remove elements from array













let card1 = document.getElementById("cards1");
let card2 = document.getElementById("cards2");
let sums = document.getElementById("summ");
let msg = document.getElementById("msgs");
let totl = document.getElementById("totalsum");
let failure = document.querySelector("#logout");



// querySlector is Used in Broader Terms to ask for something
// . for class and # for Id

// While get Elem

let first_card = 0;
let second_card = 12;

let sum = first_card + second_card;
let isAlive = true;
let msg1 = "Do you wnat to draw new card";
let msg2 = "Whoo! You Got a black jack";
let msg3 = "You are Out of game!"



function start(){

    card1.textContent = first_card;
   card2.textContent = second_card;
   sums.textContent = sum;
if(sum <= 20) {
    console.log("Do you wnat to draw new card");
    msg.textContent = msg1;
}else if(sum === 21){
    console.log("Who! you got a black jack");
    msg.textContent = msg2;
}else {
    console.log("You are out of game");
    isAlive = false;
    msg.textContent = msg3;
}

/* === is equal to opreator */
 console.log(sum);

//logging out
if (isAlive === false){
    msg = "we are loggong out here";
    console.log(msg);
    failure.textContent = msg;   
}

}


function newcard(){
    let third_card = 3;
    sum += third_card;
    start();
}