'use strict';

/**
 * @ngdoc function
 * @name postItApp.controller:MainCtrl
 * @description
 * # MainCtrl
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

app.controller('MainCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
    ];
});
