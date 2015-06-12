'use strict';

/**
 * @ngdoc overview
 * @name postItApp
 * @description
 * # postItApp
 *
 * Main module of the application.
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

app.constant('FIREBASE_URL', 'https://postit-mafunk.firebaseio.com//');

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/posts', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
    .when('/posts/:postId', {
      templateUrl: 'views/comments.html',
      controller: 'CommentCtrl'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'AuthCtrl',
      resolve: {
        user: function(Auth) {
          return Auth.resolveUser();
        }
      }
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'AuthCtrl',
      resolve: {
        user: function(Auth) {
          return Auth.resolveUser();
        }
      }
    })
    .when('/users/:userId', {
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
