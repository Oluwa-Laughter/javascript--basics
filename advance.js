// New Es 6 features

// let + const
let a = "test";
const b = true;
const c = 789;

a = "test2";

// Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  city: "New york",
};

const { firstName, lastName, age, eyeColor } = person;

// Object properties
const a2 = "test";
const b2 = true;
const c2 = 789;

const okObj = { a1, b2, c2 };

// Template strings
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
const isValidage = (age = 10) => age;

// symbol
const x2 = Symbol(person);
const y2 = Symbol(okObj);
const z = Symbol("This is my first symbol");

// Arrow functions
const locateMe = (username = "firefox", location = "New york") => {
  if (username === "firefox" && location === "New york") {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
};

arrow();
