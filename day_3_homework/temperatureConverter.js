// Write a function that takes in a temperature in celsius and returns the
// temperature in Fahrenheit rounded to one decimal point.
//
// The formula to convert Celsius to Fahrenheit is: F = C * 9/5 + 32
//
// For example, if the input is 23 the function should return 73.4
//
// [Stretch 1]
// Make the function take an array of temperatures and returns the conversion
// results in an array as well.
//
// For example, if the input of the function is [23, 26, 30] the function
// should return [73.4, 78.8, 86]
//
// [Stretch 2]
// Make the function take an object of temperatures and returns the conversion
// results in an object as well.
//
// For example, if the input of the function is
// { vancouver: 23, burnaby: 26, seattle: 30 } the function should return
// { vancouver: 73.4, burnaby: 78.8, seattle: 86 }
//
// [Stretch 3]
// Make the function accept any of the options above (number, array or object)
// and return the appropriate result.

function celsiusToFahrenheit(temperature) {
  if (typeof temperature === 'number') {
    temperature = temperature * 9/5 + 32;
    temperature = temperature.toFixed(1);
    return temperature;
  } else if (Array.isArray(temperature)) { // how to do this using for...of structure?
    for (let i = 0; i < temperature.length; i++) {
      temperature[i] = celsiusToFahrenheit(temperature[i]);
    }
    // for (let value of temperature) { // non functioning code
    //   console.log(value);
    //   console.log(celsiusToFahrenheit(value));
    //   temperaturevalue = celsiusToFahrenheit(value);
    // }
    return temperature;
  } else if (typeof temperature === 'object') {
    for (let city in temperature) {
      temperature[city] = celsiusToFahrenheit(temperature[city]);
    }
    return temperature;
  } else {
    console.log('Unsupported parameter type.');
    return;
  }
  return temperature;
}
// celsiusToFahrenheit(23);
celsiusToFahrenheit([23, 26, 30]);
// celsiusToFahrenheit({ vancouver: 23, burnaby: 26, seattle: 30 });
