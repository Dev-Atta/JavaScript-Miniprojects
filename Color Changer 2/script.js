
let to_change = document.querySelector("body");

let flow = 0;
const changer_function = function changer(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    to_change.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

document.getElementById("start").addEventListener("click", function(){
   flow = setInterval(changer_function,2000);
})

document.getElementById("stop").addEventListener("click", function(){
    clearInterval(flow);
})