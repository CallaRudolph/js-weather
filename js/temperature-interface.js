var Temperature = require('./../js/temperature.js').temperatureModule;

var displayTemperature = function(city, tempData) {
  $('.showTemperature').text("The temperature in " + city + " is " + tempData + " degrees Kelvin");
};

var displayTemperatureCelsius = function(city, tempData) {
  $('.showTemperatureC').text("The temperature in " + city + " is " + tempData + " degrees Celsius");
};

var displayTemperatureFahrenheit = function(city, tempData) {
  $('.showTemperatureF').text("The temperature in " + city + " is " + tempData + " degrees Fahrenheit");
};

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();
  $('#weatherTK-location').click(function() {
    var city = $('#location').val();
    // $('#location').val("");
    currentTemperatureObject.getTemperature(city, displayTemperature);
  });

  $('#weatherTC-location').click(function() {
    var city = $('#location').val();
    // $('#location').val("");
    currentTemperatureObject.getTemperatureC(city, displayTemperatureCelsius);
  });

  $('#weatherTF-location').click(function() {
    var city = $('#location').val();
    // $('#location').val("");
    currentTemperatureObject.getTemperatureF(city, displayTemperatureFahrenheit);
  });
});
