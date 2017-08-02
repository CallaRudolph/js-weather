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

exports.temperatureModule = Temperature;
