const reverseString = function (string) {
  let splitString = string.split("");
  let stringReverse = splitString.reverse().join("");
  return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
