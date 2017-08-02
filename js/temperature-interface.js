var Temperature = require('./../js/temperature.js').temperatureModule;

var displayTemperature = function(city, tempData) {
  $('.showTemperature').text("The temperature in " + city + " is " + tempData + " degrees");
  console.log(city);
};

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();
  $('#weatherT-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentTemperatureObject.getTemperature(city, displayTemperature);
  });
});
