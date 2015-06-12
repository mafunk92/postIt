'use strict';

var app = angular.module('postItApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]);


app.filter('hostnameFromUrl', function () {
  return function (str) {
    var url = document.createElement('a');

    url.href = str;

    return url.hostname;
  };
});
