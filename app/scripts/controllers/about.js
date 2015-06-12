'use strict';

/**
 * @ngdoc function
 * @name postItApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the postItApp
 */

 var app = angular.module('postItApp', [
     'ngAnimate',
     'ngCookies',
     'ngResource',
     'ngRoute',
     'ngSanitize',
     'ngTouch',
     'firebase'
   ]);

app.controller('AboutCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
