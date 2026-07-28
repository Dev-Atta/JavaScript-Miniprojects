const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");


// lOOP TO GET THE all bUTTONS
buttons.forEach(function(button) {

   button.addEventListener("click",function(e){
    //console.log(e);
    //console.log(e.target) // e.target gives The current element being clicked
    if(e.target.id === "grey"){
        body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "yellow"){
        body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "red"){
         body.style.backgroundColor = e.target.id;
    }
   })
})