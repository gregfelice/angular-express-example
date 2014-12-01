'use strict';

/**
 * @ngdoc filter
 * @name aarhusApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the aarhusApp.
 */
angular.module('aarhusApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
