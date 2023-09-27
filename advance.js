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

// default parameter in function
const isValidage = (age = 10) => age;

// Symbol()- JS type
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

// Advance Arrays Method

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

// advance Objects methods

const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5 };
object1.a = 4;

console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound() {
    console.log(
      `Mooo my name is ${this.name}, I am a ${this.type} and my color is ${this.color}`
    );
  }
}

const cow = new Mamal("Daisy", "cow", "black");

// ES 7

// Includes
const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];
console.log(dragons.includes("John"));

const checkForJohn = dragons.filter((check) => check.includes("John"));
console.log(checkForJohn);

// Exponentiation operator
const exp = (k) => k ** 100;
exp(2);
exp(10000);

// ES 8

const startLine = "      ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);

console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.trim().padEnd(9, "=");
console.log(turtle);

const obj = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

let objEntries = Object.entries(obj);
console.log(objEntries);

let reArrange = objEntries.map((value) => value.join(" ")).join(" ");
console.log(reArrange);
// OR
console.log(
  Object.entries(obj)
    .map((value) => value.join(" "))
    .join(" ")
);

// ES 9 + Async Awaits

// ES10

// flat()
const arrFlaten = [[1], [2], [3], [[[4]]], [[[5]]]];
arrFlaten.flat(2);

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
trapped.flat(50);

const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];

// flatMap()
console.log(greeting.flatMap((mapped) => mapped.join(" ").join(" ")));

// trimStart() trimEnd()
const userEmail = "     cannotfillemailformcorrectly@gmail.com     ";
userEmail.trimStart().trimEnd(); //can be done separately

// fromEntries
const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArr = Object.entries(users).map((use) => [use[0], use[1] * 2]);

const userFromEntries = Object.fromEntries(usersArr);

// ES 2020
// BigInt
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

3n + 4n + 1n; //bigint
3 + 4 + 1; //number

// optional chaining "?"
let will_pokemon = {
  pikachu: {
    species: "Mouse Pokemon",
    height: 0.4,
    weight: 6,
    power: "lightning",
    friend: {
      charizard: {
        species: "Dragon Pokemon",
        height: 1.7,
        weight: 90.5,
        power: "fire",
      },
    },
  },
};

let andrei_pokemon = {
  raichu: {
    species: "Mouse Pokemon",
    height: 0.8,
    weight: 30,
    power: "",
  },
};

if (
  andrei_pokemon &&
  andrei_pokemon.raichu &&
  will_pokemon &&
  will_pokemon.pikachu &&
  will_pokemon.pikachu.friend &&
  will_pokemon.pikachu.friend.charizard
) {
  console.log("fight!");
} else {
  console.log("walk away...");
}

let fight =
  andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard
    ? "fight!"
    : "walk away...";

console.log(fight);

//Nullish coalescing operator
console.log(false ?? "hellooo");
console.log(null ?? "hellooo");
console.log(null || "hellooo");
console.log((false || null) ?? "hellooo");
console.log(null ?? (false || "hellooo"));
