// reversing a string
const reverseString = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

reverseString("oluwalaughter");

// using built in reverse() method
const reverseStringMethod = (str) => {
  return str.split("").reverse().join("");
};

// reversing an array using loop
const array = [1, 2, 3, 4, 5];
const reversearr = (arr) => {
  let reversedArr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
};
reversearr(array);

// using built in reverse method
const reverseArrayMethod = (arr) => {
  return arr.reverse();
};

reverseArrayMethod(array);

// using loops and reverse method
const reverseUseForEach = array.forEach((item) => {
  return item.reverse();
});
console.log(reverseUseForEach);
