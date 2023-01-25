const convertToCelsius = function(fahrenheit) {
  const fTemp = fahrenheit;
  const toCels = (fTemp - 32) *5/9;
  let result = Math.round(toCels*10)/10
  return result;
};

const convertToFahrenheit = function(celsius) {
  const cTemp = celsius;
  const toFahr = cTemp * 9/5 +32;
  let result = Math.round(toFahr*10)/10
  return result; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
