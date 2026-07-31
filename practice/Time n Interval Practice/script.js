// setTimeout
// setInterval
// clearTimeout


// setTimeout(function(){   // Wait For 2 seconds Then Execute function
//     console.log("Kya keri maeri jan")
// },2000)



// const sayHello = function(){
//     console.log("kya Keri meri jan");
// }

//setTimeout(sayHello,2000); // Executing by refrence

// const change_text = function(){
// document.querySelector("h1").innerHTML = "Kya Kehri meri jan";
// }

// const change_me = setTimeout(change_text,2000);// Execute after 2 sec

// document.querySelector("#stop").addEventListener("click",function(){
// clearTimeout(change_me); // Will not Do it
// console.log("Timer Stoped");
// })


// setInterval( function() {  // Keep  on doing thing After Each Interval
//     console.log("IN set Interval ",Date.now());
// }, 2000);

let to_stop = 0;
const say_date = function the_date(){
    console.log("Today is ", Date.now());
}

document.getElementById("start").addEventListener("click",function(){
     // After clicking Start It will keep giving Date After each 2 sec
    to_stop = setInterval(say_date,2000); 
})


document.getElementById("stop").addEventListener("click",function(){
    clearInterval(to_stop); // After clicking Start It will keep giving Date After each 2 sec
})