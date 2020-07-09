/**
 *
 */
const sumAll = (a, b) => {
  if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }

  if (a < b) {
    firstNumber = a;
    secondNumber = b;
  } else {
    firstNumber = b;
    secondNumber = a;
  }

  let sum = 0;
  for (let i = firstNumber; i <= secondNumber; i++) {
    sum += i;
  }

  return sum;
};

module.exports = sumAll;
