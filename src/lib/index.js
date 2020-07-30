
const converters = {
  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  },

  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  },
}


export default (temperature, conversion) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return 'Not something we can convert!';
  }

  return Math.round(converters[conversion](input) * 1000) / 1000;
}
