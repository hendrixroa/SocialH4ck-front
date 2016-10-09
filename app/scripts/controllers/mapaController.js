'use strict';

/**
 * @ngdoc function
 * @name socialH4ckFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the socialH4ckFrontApp
 */
angular.module('socialH4ckFrontApp')
  .controller('MapaCtrl', function ($scope, $http) {
    
    $scope.data = [];
    $scope.showMapa = false;
    $scope.map = { center:{
        lati:0,
        long:0
     } 
    };

    angular.element(document).ready(function () {
      
      $http.get('data.json')
            .then(function(res) {
                $scope.data = res.data;
            }
      ); 

    });

    $scope.verMapa = function(lati,long){
      $scope.showMapa = !$scope.showMapa;
      $scope.lati = null;
      $scope.long = null;
      $scope.map.center.lati = lati;
      $scope.map.center.long = long;
      return $scope.map;
    };


  });
