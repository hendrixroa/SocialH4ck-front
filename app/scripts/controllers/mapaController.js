'use strict';

/**
 * @ngdoc function
 * @name socialH4ckFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the socialH4ckFrontApp
 */
angular.module('socialH4ckFrontApp')
  .controller('MapaCtrl', function ($scope, $http, NgMap) {
    
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyCepkWd2aD355Hxr-DNpP31bD39qvnrOuw";

    $scope.data = [];
    $scope.showMapa = false;
    $scope.long = null;
    $scope.lati = null; 

    NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
    });

    angular.element(document).ready(function () {
      
      $http.get('data.json')
            .then(function(res) {
                $scope.data = res.data;
            }
      ); 

    });

    $scope.verMapa = function(lati,long){
      $scope.showMapa = !$scope.showMapa;
      $scope.lati = lati;
      $scope.long = long;
    };


  });
