'use strict';

/**
 * @ngdoc overview
 * @name newangularprojectApp
 * @description
 * # newangularprojectApp
 *
 * Main module of the application.
 */
angular
  .module('newangularprojectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'ngStorage',
    'ui.bootstrap'
  
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/userdetail/:by', {
        templateUrl: 'views/userdetail.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
    
      .when('/comment/:id', {
        templateUrl: 'views/userdetail.html',
        controller: 'CommentCtrl',
        controllerAs: 'comment'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
