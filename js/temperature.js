var apiKey = require('./../.env').apiKey;
Temperature = function() {

};

Temperature.prototype.getTemperature = function(city, displayTemperature) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayTemperature(city, response.main.temp);
  }).fail(function(error) {
    $('.showTemperature').text(error.responseJSON.message);
  });
};

Temperature.prototype.getTemperatureC = function(city, displayTemperatureCelsius) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    var celsius = Math.round(response.main.temp - 273);
    displayTemperatureCelsius(city, celsius);
  }).fail(function(error) {
    $('.showTemperatureC').text(error.responseJSON.message);
  });
};

Temperature.prototype.getTemperatureF = function(city, displayTemperatureFahrenheit) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    var fahrenheit = Math.round(1.8 * (response.main.temp - 273) + 32);
    displayTemperatureFahrenheit(city, fahrenheit);
  }).fail(function(error) {
    $('.showTemperatureF').text(error.responseJSON.message);
  });
};

exports.temperatureModule = Temperature;
