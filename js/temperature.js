var apiKey = require('./../.env').apiKey;

Temperature = function() {
};

Temperature.prototype.getTemperature = function(city, displayTemperature) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayTemperature(city, response.main.temp, Math.round(response.main.temp - 273), Math.round(1.8 * (response.main.temp - 273) + 32));
  }).fail(function(error) {
    $('.showTemperature').text(error.responseJSON.message);
  });
};

exports.temperatureModule = Temperature;
