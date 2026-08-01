// JavaScript has classes, introduced in ES6 (2015).
//  They're mainly syntactic sugar over JavaScript's existing prototype-based inheritance — meaning under the hood, 
//  it still works the same way it always did, but class gives you a cleaner, more familiar syntax (especially if you're coming from languages like C++ or Java).


// OBJECT IS COLLECTION OF PROPERTIRES AND METHODS

// why use?
// for structural code

// Parts of oop:
// object lteraks

// -construtors  // gives us an instance o play with everytime when We create an object
//  // new keyword Is used To get A very New copy of that instance Not that overwrite one
//  // 'this' keyword talks about the current context

// -prototypes
// -classes
// -instances (new, this)


// encapsulation
// inheritance
// polymorphism




// JavaScript behaves on prototypes
// // i.e. protoypal inheritance (going up and up to find things)
// // everything in javascript is an object
// // function is also a object 


// new — creates a new object instance from a constructor function/class, running its setup logic to produce a fresh, independent object.

// javascript
// const p1 = new Person("Atta", 19);
// this — refers to the object that's currently "owning" the code being executed (context depends on how the function is called).
// javascript
// console.log(this.name); // refers to whichever object called this method


// Prototypes:

// let my_name = "hey    "
// console.log(my_name.truelenght());

// let myheros =["thor", "spiderman"];

// let heropower(){
//     thor : "hamer",
//     spiderman : "sling"


//     spderpower: function(){
//         console.log(`spider man have power ${this.spiderman}`);
//     }
// }

// Object.prototype.atta = function(){
//     console.log(`atta is Present in all objects`)
// }

// myheros.atta();

// // adding a new method to the Object prototype allows all objects to inherit this method. In this case, the `atta` method will be available to all objects, including arrays like `myheros`. When you call `myheros.atta()`, it will log "atta is Present in all objects" to the console.


// // inheritance
// const teaching = {
//     subject : "Math"
// }

// const teachingsupport = {
//    isAvailable : true
// }


// Object.setPrototypeOf(teachingsupport, teaching)
// // teachingsupport access the PROPERTIRES of teaching

// .call holds refrence For us

// declearing class

// class  user {
//     constructor(name, age, password){
//         this.name = name;
//         this.age = age;
//         this.password = password;
//     }

//     encrypted_passwords(){
//          return `encrypted password is ${this.password}abc `;
//     }
// }


// const someone = new user("atta", 19, "1234");
// console.log(someone.encrypted_passwords());

// super() is used to call the constructor of the parent class.


// static methods are called on the class itself, not on instances of the class. They are often used for utility functions that are related to the class but don't require an instance to operate.
// it restricts the method to be called only on the class itself, not on instances of the class. This is useful for utility functions that are related to the class but don't require an instance to operate.
 
// .bind() creates a new function with this permanently locked to whatever value you specify — 
// no matter how or where that new function gets called later.
