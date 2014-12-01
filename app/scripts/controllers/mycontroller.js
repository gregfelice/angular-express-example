'use strict';

/**
 * @ngdoc function
 * @name aarhusApp.controller:MycontrollerCtrl
 * @description
 * # MycontrollerCtrl
 * Controller of the aarhusApp
 */
angular.module('aarhusApp')
  .controller('MycontrollerCtrl', function ($scope) {

    $scope.things = [
      'Mia',
      'Bo',
      'Erica'
    ];

  });
