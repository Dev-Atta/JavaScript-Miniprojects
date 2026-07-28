const user_input = document.getElementById("user_input");
const submit = document.getElementById("submit");
const previous_guess = document.getElementById("previous_guess");
const guess_remaining = document.getElementById("guess_remaining");
const user_message = document.getElementById("displaymsg");
const start_over = document.getElementById("resultparas");

const p = document.createElement("p");

let random_number = parseInt((Math.random()*100)+1);
let guess_array = [];
let num_guesses = 1;
let play_game = true;

if(play_game){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess =  parseInt(user_input.value);
        validate_guess(guess);
    })
}


function validate_guess(guess){
    if(isNaN(guess)){
        alert("Please Enter a Valid Number");
    }
    else if (guess < 1){
        alert("Please Enter Number greater than 0");
    }
    else if (guess > 100){
        alert("Please Enter a less than 101");
    }
    else {
        guess_array.push(guess);
        if(num_guesses == 11){
            display_guess(guess)
            display_message(`Game Over! Random NUMBER was ${random_number}`);
            end_game();
        }
        else {
            display_guess(guess);
            check(guess);
        }

    }

}

function check(guess){
    if(guess === random_number) {
        display_message(" Your Guess is right ")
        end_game();
    }
    else if (guess < random_number){
        display_message(" Number is low ")
    }
     else if (guess > random_number){
        display_message(" Number is high ")
    }

}



function display_guess(guess){
    user_input.value = ""
    previous_guess.innerHTML += ` ${guess} ` 
    num_guesses++;
    guess_remaining.innerHTML =  `Guess Remaining: ${11 - num_guesses}`;
}


// Dom manuplation here
function display_message(message){
    user_message.innerHTML = `<h2>${message}</h2>`
}

function new_game(){
   random_number = parseInt((Math.random()*100)+1);
   guess_array = [];
   num_guesses = 1;
   previous_guess.innerHTML = "Previous Guess :";
   guess_remaining.innerHTML = `Guess Remaining: ${11 - num_guesses}`;
   user_input.removeAttribute("disabled");
   start_over.removeChild(p);
   play_game = true;
}
function end_game(){
    user_input.value = "";
    user_input.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="New_game">Start New Game</h2>`;
    start_over.appendChild(p);
    play_game = false;

    p.addEventListener("click", new_game); // reset only on click
}
