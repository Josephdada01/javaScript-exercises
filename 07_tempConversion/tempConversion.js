const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  let roundedFahrenheit = parseFloat(celsius.toFixed(1));
  return roundedFahrenheit;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  let roundedCelsius = parseFloat(fahrenheit.toFixed(1));
  return roundedCelsius;
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
