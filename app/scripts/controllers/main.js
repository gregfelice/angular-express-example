'use strict';

/**
 * @ngdoc function
 * @name aarhusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aarhusApp
 */
angular.module('aarhusApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
