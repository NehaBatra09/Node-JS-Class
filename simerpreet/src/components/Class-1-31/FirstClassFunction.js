// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
import React from "react";


// Assigning a function to a variable
const foo = () => {
    console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar


//   Passing a function as an argument

function sayHello() {
    return "Hello, ";
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!


// Returning a function
function sayHello() {
    return () => {
        console.log("Hello!");
    };
}