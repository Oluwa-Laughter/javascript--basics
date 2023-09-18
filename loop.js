var daily = ["exercise", "chores", "study JS", "brunch", "sleep"];

// using for loop
for (var i = 0; i < daily.length; i++) {
  console.log(daily[i] + "!");
  daily[i] = daily[i] + "!";
  daily.pop(); // removes the last item in the array
}

// using while loop
var counter = 10;
while (counter > 0) {
  console.log(counter);
  counter--;
}

// using do while loop
var counter2 = 10;
do {
  console.log(counter2);
  counter2--;
} while (counter2 > 10);

// using forEach loop method (new in ECMAscript 5)
function x(daily) {
  console.log(daily);
}
daily.forEach(x);

// looping through an array of objects

var login = [
  {
    username: "Firefox",
    password: "Ohdjsjanxn",
  },
  {
    username: "Chrome",
    password: "browser",
  },
  {
    username: "mozilla",
    password: "killing",
  },
];

var newsfeed = [
  {
    username: "Laughter",
    timeline: "HTML is a programming Language, Go and Argue In the Court",
  },
  {
    username: "Basito",
    timeline: "sell that your Iphone11, Buy a laptop instead",
  },
  {
    username: "Kuzzman",
    timeline: "@Basito No be you go tell me wetin I go do",
  },
];

var userNameData = prompt("Enter your username");
var userPasswordData = prompt("Enter your password");

function isUserValid(username, password) {
  for (var i = 0; i < login.length; i++) {
    if (login[i].username === username && login[i].password === password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Wrong username or password");
  }
}

// FizzBuzz
for (var i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
