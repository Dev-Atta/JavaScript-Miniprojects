// The Promise object represents the eventual completion (or failure)
//  of an asynchronous operation and its resulting value.
// it represents a value that isn't available yet, 
// but will be at some point (either successfully, or with an error).


// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// The new keyword is used to create an instance of an object 
// from a constructor function (or class) — 
// it's not unique to Promises; you use it any time you're building 
// something from a blueprint that needs its own internal setup.


// Promise Takes a call back inside it
const promise1 = new Promise(function(resolve,reject){
    // do any asyn task
    // data bas call, cryptograpy, network 
    setTimeout(function(){
        console.log("Async Is completed")
        resolve(); // Now it is Connedted With then
    },1000)
})


// promise1.then()   //.then() is Directly Related To resolve
// .then() gives us a call back

promise1.then(function(){
    console.log("Promise Consumed")
})




new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Task 2 Async")
        resolve();
    },2000)

}).then(function(){
    console.log("Async 2 reolved");
});



const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username: "Atta", email : "meatta001@gmail.com"}) // pasing values (In objects oR any DAta structure)
    //  is also possible using resolve
    },3000)
})


// Now Object is Pass using rsolve
promise3.then(function(user){
    console.log(user);
})




const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName: "HITman", email: "email here"})
        }
        else {
            reject("ERROR")
        }
    },1000)
            
})



// console.log(user_name);  // The returing value OF user.username is not comming 
// inside the user
// we can use Multiuple .then()
let user_name = promise4.then((user) =>{
    console.log(user);
    return user.userName; 
}).then((name) => {
   console.log(name); //  this is where you get "HITman" AFTER CHAINING
}).catch(function(error){  // RejectIon Goes in catch
    console.log(error)
    
}).finally(()=> {
    // it runs by default
    console.log("Promise is either Reolved or rejected")
})

// .then(), .catch(), .finally() are promise Handers





// 
const promise5 = new Promise((resolve,reject)=>{
 setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "JAva Bhai", email: "Anthing"})
        }
        else {
            reject("ERROR: Js went Wrong")
        }
    },1000)
})

// async cannot directly handle errors
// async function consumepromise5(){
//     const reponce = await promise5;  // Await gets Anything that is going to come form promise 
//     console.log(reponce)
// }
    

 async function consumepromise5(){
    try {
    const reponce = await promise5;  // Await gets Anything that is going to come form promise 
    console.log(reponce)    
   }
   catch (error){
    console.log(error);
   }
   
    
    
}
consumepromise5();



// async function getallusers() {
//     try {
//     const responce = await fetch("https://api.github.com/users/dev-atta")
//     //  console.log(responce)   
//     const data = await responce.json();  // await basically Wait for the request to be fulfill Before Giving Error 
//     // as it takes time To conver string to JSON
//     console.log(data)
// }
//     catch (error) {
//         console.log("error Here")
//     }
// }

// getallusers();


// Easy Way To do it
// fetch Gives a promise
fetch("https://api.github.com/users/dev-atta")
.then((response)=>{
    return response.json();
}).then((data)=> {
    console.log(data)
})
.catch((error)=> {
    console.log('Error')
})
.finally(()=>{
    console.log("PRimose Fullfiled")
})

// EveryThing is Going in sequnce


// so there are two ways to handle resolve and reject of promisese
// first is using try and catch in async function 
// Other is directly using .then() .catch() with promise

// The Fetch API provides an interface for fetching resources (including across the network).
//  It is a more powerful and flexible replacement for XMLHttpRequest.
// Fetch is BASICALLY A REPLACEMENT OF XMLHttpRequest()


// ERROR oNLY comes When the browser wanot able To do the request
// But Error 404 comming from somewhere is a Responce


// fetch("url" , {header, object or anything})

// THERE IS A queue named Micro task queue whcih is made when 
// fetch() is called 
// fetch() queue is In priority


// fecth works in two parts
// Memory acquring
// And Web api request