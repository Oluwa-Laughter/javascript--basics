// Array

var arr = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(arr.shift());
console.log(arr.sort());

var new_arr = arr.concat(["Kiwi"]);
console.log(new_arr);
console.log(new_arr.splice(0, 1));

console.log(new_arr.reverse());

var arr2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(arr2[1][1]);

// Objects

var login = {
  username: "Firefox",
  password: "Ohdjsjanxn",
};

console.log(login.username);

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

// functions, methods & condition

function signIn(user, pass) {
  if (user === login.username && pass === login.password) {
    console.log(newsfeed);
  } else {
    alert("Wrong username or password");
  }
}

signIn(userNameData, userPasswordData);
