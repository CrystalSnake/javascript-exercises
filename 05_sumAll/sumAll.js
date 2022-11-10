const sumAll = function () {
  if (
    arguments[0] < 0 ||
    arguments[1] < 0 ||
    typeof arguments[0] != "number" ||
    typeof arguments[1] != "number"
  ) {
    return "ERROR";
  } else {
    var min;
    var max;
    var sum = 0;
    if (arguments[0] > arguments[1]) {
      min = arguments[1];
      max = arguments[0];
    } else {
      min = arguments[0];
      max = arguments[1];
    }
    for (var i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
