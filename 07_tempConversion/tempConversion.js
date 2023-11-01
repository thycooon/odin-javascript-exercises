const convertToCelsius = function(tempInCelsius) {
  let tempInFahrenheit = Number((Number(tempInCelsius) - 32)*5/9)
  return Number.isInteger(tempInFahrenheit) ? tempInFahrenheit : Number(tempInFahrenheit.toFixed(1))
};

const convertToFahrenheit = function(tempInFahrenheit) {
  let tempInCelsius = Number(Number(tempInFahrenheit) * 9/5 + 32);
  return Number.isInteger(tempInCelsius) ? tempInCelsius : Number(tempInCelsius.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};