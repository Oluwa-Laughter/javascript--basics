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

// advance Looping

const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};

// for in
for (item in detailedBasket) {
  console.log(item);
}

// for of
for (item of basket) {
  console.log(item);
}

const array1 = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ["a", 3, 4, 2];
const array3 = [];

const biggestNumberInArray1 = (arr) => {
  let highNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highNum < arr[i]) {
      highNum = arr[i];
    }
  }
  return highNum;
};

biggestNumberInArray1(array1);

const biggestNumberInArray2 = (arr) => {
  let highNum = 0;
  arr.forEach((num) => {
    if (highNum < num) {
      highNum = num;
    }
  });
  return highNum;
};

biggestNumberInArray2(array2);

const biggestNumberInArray3 = (arr) => {
  let highNum = 0;
  for (num of arr) {
    if (highNum < num) {
      highNum = num;
    }
  }
  return highNum;
};

biggestNumberInArray3(array3);

// for in
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

const checkBasket = (basket, lookingFor) => {
  for (item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in the basket`;
    }
    return `${lookingFor} is not in the basket`;
  }
};

checkBasket(amazonBasket, "books");
