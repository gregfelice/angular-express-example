'use strict';

/**
 * @ngdoc filter
 * @name fruffiApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the fruffiApp.
 */
angular.module('fruffiApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
