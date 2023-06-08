//when we use the "this" keyword inside of an object and declare it using a normal function, "this" refers to the object itself, but when "this" is declared using an arrow fuction then "this" is looking outside of the object,therefore making it undefined.

// Normal Function
function sayHello() {
  console.log("Hello, " + this.name);
}

// Arrow Function
const greet = () => {
  console.log("Greetings, " + this.name);
};

// Object
const person = {
  name: "John",
  sayHello: sayHello,
  greet: greet,
};

// Calling the functions
person.sayHello(); // Output: Hello, John
person.greet(); // Output: Greetings, undefined
