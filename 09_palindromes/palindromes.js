const palindromes = function (originString) {
  let onlyLetterString = '';
  for (let i = 0; i < originString.length; i++) {
    if (
      originString[i] === ' ' ||
      originString[i] === ',' ||
      originString[i] === '.' ||
      originString[i] === '!'
    ) {
      continue;
    } else {
      onlyLetterString += originString[i];
    }
  }

  let checkString = onlyLetterString.toLowerCase();
  let reverseString = '';
  let i = checkString.length - 1;
  while (i >= 0) {
    if (
      checkString[i] === ' ' ||
      checkString[i] === ',' ||
      checkString[i] === '.' ||
      checkString[i] === '!'
    ) {
      i--;
      continue;
    } else {
      reverseString += checkString[i];
      i--;
    }
  }

  if (checkString === reverseString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
