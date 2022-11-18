const fibonacci = function (limit) {
  if (+limit < 1) {
    return 'OOPS';
  } else {
    let firstNumber = 1;
    let secondNumber = 1;
    let sum = 0;
    for (let i = 1; i < +limit - 1; i++) {
      sum = firstNumber + secondNumber;
      firstNumber = secondNumber;
      secondNumber = sum;
      sum = 0;
    }
    return secondNumber;
  }
};

// Do not edit below this line
module.exports = fibonacci;
