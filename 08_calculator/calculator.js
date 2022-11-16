const add = function (firstOp, secondOp) {
  return firstOp + secondOp;
};

const subtract = function (firstOp, secondOp) {
  return firstOp - secondOp;
};

const sum = function (arrayForSum) {
  let sum = 0;
  for (let number in arrayForSum) {
    sum += arrayForSum[number];
  }
  return sum;
};

const multiply = function (arrayForMulti) {
  let result = 1;
  for (let number in arrayForMulti) {
    result *= arrayForMulti[number];
  }
  return result;
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
