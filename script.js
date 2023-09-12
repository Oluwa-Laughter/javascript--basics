// Variables
var firstName = "Isaac";
var lastName = "Makinde";
alert(firstName + lastName);

var a = prompt("firstNumber");
var b = prompt("secondNumber");
var sum = Number(a) + Number(b);
alert(sum);

// Calculator
var a = prompt("firstNumber");
var b = prompt("secondNumber");
var sum = Number(a) + Number(b);
var subtract = Number(a) - Number(b);
var divide = Number(a) / Number(b);
var multiply = Number(a) * Number(b);
alert("The sum is: " + sum);
alert("The subtraction is :" + subtract);
alert("The division is :" + divide);
alert("The multiplication is :" + multiply);

// control flow
var age = prompt("How old are you?");
if (age < 18) {
  alert("you can't play this game, shutting down");
} else if (age > 18) {
  alert("Welcome starting the car");
} else {
  alert("This is your first game welcome");
}
