const removeFromArray = function () {
  arrayForCheck = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    for (item in arrayForCheck) {
      if (arguments[i] === arrayForCheck[item]) {
        arrayForCheck.splice(item, 1);
      } else {
        continue;
      }
    }
  }
  return arrayForCheck;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
