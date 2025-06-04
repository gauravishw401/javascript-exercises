const sumAll = function (a, b) {
  let arr = [];

  if (
    a < 0 ||
    b < 0 ||
    !Number.isInteger(a) ||
    !Number.isInteger(b) ||
    typeof a !== "number" ||
    typeof b !== "number"
  ) {
    return "ERROR";
  } else if (a > b) {
    for (i = a; i >= b; i--) {
      arr.push(i);
    }

    let addedResult = arr.reduce((sum, current) => {
      return sum + current;
    });

    return addedResult;
  } else {
    for (i = a; i <= b; i++) {
      arr.push(i);
    }

    let addedResult = arr.reduce((sum, current) => {
      return sum + current;
    });

    return addedResult;
  }
};

// Do not edit below this line
module.exports = sumAll;
