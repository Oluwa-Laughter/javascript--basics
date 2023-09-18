function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(a);
}

var a = 0;
function q2() {
  a = 5;
}

function q22() {
  alert(a);
}

function q3() {
  window.a = "hello";
}

function q32() {
  alert(a);
}

var a = 1;
function q4() {
  var a = "test";
  alert(a);
}

var a = 2;
if (true) {
  var a = 5;
  alert(a);
}
alert(a);
