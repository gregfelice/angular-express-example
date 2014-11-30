'use strict';

/**
 * @ngdoc function
 * @name fruffiApp.controller:MycontrollerCtrl
 * @description
 * # MycontrollerCtrl
 * Controller of the fruffiApp
 */
angular.module('fruffiApp')
  .controller('MycontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
