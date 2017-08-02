# _Basic Weather App_

#### _Epicodus-JavaScript, Week 1 API Practice, 08.02.2017_

#### By _**Calla Rudolph, Nathan Stewart**_

## Description

This app allows the user to enter a location and view specific weather information using the OpenWeatherMap API. The app will display the location's humidity and temperature in Kelvin, Celsius, and Fahrenheit.

## Prerequisites

_You will need the following properly installed on your computer:_

* [Node.js](https://nodejs.org/en/)
 * Once installed, you will need to install gulp and bower globally:
 ````
 $ npm install gulp -g
 $ npm install bower -g
 ````
* [Ruby](https://www.ruby-lang.org/en/downloads/)
 * Once installed, you will need to install sass globally:
   ````
   $ gem install sass
   ````

_You will need your own API Key from [OpenWeatherMap](https://openweathermap.org/)_

* Sign up for a new free account if you have not done so already.
* Copy your personal key provided within your profile.
* Create a .env file at the top level of your project folder and write: exports.apiKey = "YOUR-API-KEY-GOES-HERE"; and save the file.

## Configuration/Dependencies

* npm
* gulp
* bower
* bower-files
* browser-sync
* browserify
* vinyl-source-stream
* del
* jshint
* gulp-concat
* gulp-uglify
* gulp-util
* gulp-jshint
* gulp-sass
* gulp-sourcemaps
* jquery
* bootstrap

## Setup/Installation

* Open GitHub site on your browser: https://github.com/GStewartN/weather
* Select the dropdown (green box) "Clone or download"
* Copy the link for the GitHub repository
* Open Terminal on your computer
* In Terminal, perform the following steps:
````
  $ cd desktop
  $ git clone <paste repository link>
  $ cd weather
  $ npm install
  $ bower install
  $ gulp build
  $ gulp serve
  ````
* At this point your browser will open the app @ localhost:3000

## Technologies Used

* _JavaScript_
* _JQuery_
* _Bootstrap_
* _Sass_
* _Node.js_
* _Bower_
* _Gulp_
* _HTML_
* _CSS_

### License

MIT License

Copyright &copy; 2017 Calla Rudolph, Nathan Stewart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
