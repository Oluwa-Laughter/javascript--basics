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

// FUNCTON inside of a function
//closure
const addTo = (x) => (y) => x + y;
const addToTen = addTo(10);
addToTen(3);

// currying
// const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);

const add5 = curriedSum(5);
add5(12);

//Composing
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add8 = (num) => num + 8;
compose(add1, add8)(10);

// Advance Array Method

const arrayOfObj = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// forEach
const putForEach = [];

const arrayForEach = arrayOfObj.forEach((user) => {
  let { username } = user;
  username = username + "!";
  putForEach.push(username);
});

console.log(arrayForEach);

//  map()
const arrayMap = arrayOfObj.map((user) => {
  let { username } = user;
  username = username + "?";
  return username;
});

console.log(arrayMap);

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArrayNum = arrayNum.map((num) => num * 2);

// filter()
const arrayFilter = arrayOfObj.filter((user) => {
  return user.team === "red";
});

console.log(arrayFilter);

//  reduce(acc, item)
const arrayReduce = arrayOfObj.reduce((acc, user) => {
  return acc + user.score;
}, 0);

console.log(arrayReduce);

// map All users
const mapAllUsers = arrayOfObj.map((user) => {
  return user;
});
console.log(mapAllUsers);

// map all users and add "!" to the items
const userInfo = arrayOfObj.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});
