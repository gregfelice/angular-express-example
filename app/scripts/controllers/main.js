'use strict';

/**
 * @ngdoc function
 * @name fruffiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fruffiApp
 */
angular.module('fruffiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
