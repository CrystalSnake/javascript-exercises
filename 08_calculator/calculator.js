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

const power = function (base, exponent) {
  let result = base;
  for (let i = 1; i < exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = number; i > 1; i--) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
