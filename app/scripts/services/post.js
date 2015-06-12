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

app.factory('Post', function ($firebaseArray, $firebaseObject, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  // going to try fbArray first, then fbObjext
  var posts = $firebaseArray(ref.child('posts'));

  var Post = {
    all: posts,
    create: function (post) {
      return posts.$add(post);
    },
    get: function (postId) {
      return $firebaseObject(ref.child('posts').child(postId));
    },
    delete: function (post) {
      return posts.$remove(post);

    },
    comments: function (postId) {
      return $firebaseArray(ref.child('comments').child(postId));
    }
  };

  return Post;
});
