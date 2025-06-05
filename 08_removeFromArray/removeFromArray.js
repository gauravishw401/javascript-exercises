// const removeFromArray = function (arg) {
//   let parameters = arg;
// };

function removeFromArray() {
  let arr = arguments[0];

  function findIndex(arg) {
    for (let value of arr) {
      if (value === arg) return arr.indexOf(value);
    }
  }
  for (i = 1; i < arguments.length; i++) {
    if (arr.includes(arguments[i])) {
      let gotIndex = findIndex(arguments[i]);
      // console.log(gotIndex);
      arr.splice(gotIndex, 1);
      i--;
    }
  }

  return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
