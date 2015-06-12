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


app.controller('ProfileCtrl', function ($scope, $routeParams, Profile) {
  var uid = $routeParams.userId;

  $scope.profile = Profile.get(uid);
  Profile.getPosts(uid).then(function(posts) {
    $scope.posts = posts;
  });
});
