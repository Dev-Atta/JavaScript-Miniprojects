const clock = document.querySelector("#clock");


// new Date() creates a Date object representing the current date and time, right at the moment the line runs.

// A few basics:

// new is the keyword used to create an object from a built-in class/constructor (here, Date).
// Date is a built-in JavaScript object that handles dates and times.
// With no arguments, new Date() gives you right now — today's date and current time, down to the millisecond.


// LOOPing after Each one second
setInterval(function(){
let date = new Date();
clock.textContent = date.toLocaleTimeString();

} , 1000); // 1000 mili Seoonds