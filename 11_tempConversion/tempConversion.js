const convertToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  let celsiusRoundOff = celsius.toFixed(1);
  return Number(celsiusRoundOff);
};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  let fahrenheitRoundOff = fahrenheit.toFixed(1);
  return Number(fahrenheitRoundOff);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
