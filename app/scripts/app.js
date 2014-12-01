'use strict';

/**
 * @ngdoc overview
 * @name aarhusApp
 * @description
 * # aarhusApp
 *
 * Main module of the application.
 */
angular
  .module('aarhusApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'MyControllerCrtl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
