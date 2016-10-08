'use strict';

/**
 * @ngdoc function
 * @name socialH4ckFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the socialH4ckFrontApp
 */
angular.module('socialH4ckFrontApp')
  .controller('MainCtrl', function ($scope, $http) {
  	 
  	 angular.element(document).ready(function () {
      
      $http.get('data.json')
            .then(function(res) {
                $scope.data = res.data;
            }
      ); 
     });

});
