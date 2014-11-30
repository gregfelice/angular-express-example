'use strict';

/**
 * @ngdoc function
 * @name fruffiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fruffiApp
 */
angular.module('fruffiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
