class user {
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    // getter and setter co exist
    get name() {  // use to get the value of name
        return this.name.toUpperCase();
    }
    // get always Return Something and set always take some value

    set name(newName) { // use to set the value of name
        this._name = newName;
    }

    get password() {  // use to get the value of password
        return this.password.toUpperCase();
    }

    set password(newPassword) { // use to set the value of password
        this._password = newPassword;
}
}

// the _ is used to avoid the infinite loop of getter and setter
//  because if we use the same name for the property and the getter/setter, 
// it will cause a stack overflow error.

const ali = new user("Ali", 25, "secret123");
console.log(ali.password); // Output: SECRET123


// closure is a function that has access to the parent scope, 
// even after the parent function has closed.
 
// measn we can access the variables of the parent function even after the parent function has finished executing.


// two seperate innr functions inside a parent function
// cannoot access the variable of each other


// lexical scope is the scope in which a variable is defined,
// and it determines the accessibility of that variable in different parts of the code.