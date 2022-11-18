const findTheOldest = function (people) {
  let oldest = {};
  let oldestAge = 0;
  for (let person of people) {
    let age;
    if (person.yearOfDeath === undefined) {
      let todayYear = new Date().getFullYear();
      age = todayYear - person.yearOfBirth;
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }

    if (age > oldestAge) {
      oldestAge = age;
      oldest = person;
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
