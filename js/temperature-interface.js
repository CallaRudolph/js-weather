var Temperature = require('./../js/temperature.js').temperatureModule;

var displayTemperature = function(city, tempData, tempDataC, tempDataF) {
  $('.showTemperature').text("The temperature in " + city + " is " + tempData + " degrees Kelvin, " + tempDataC + " degrees Celsius, and " + tempDataF + " degrees Fahrenheit.");
};

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();
  $('#weatherT-location').click(function() {
    var city = $('#location').val();
    // $('#location').val("");
    currentTemperatureObject.getTemperature(city, displayTemperature);
  });
});
