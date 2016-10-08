'use strict';

/**
 * @ngdoc overview
 * @name socialH4ckFrontApp
 * @description
 * # socialH4ckFrontApp
 *
 * Main module of the application.
 */
angular
  .module('socialH4ckFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/mapa', {
        templateUrl: 'views/verMapa.html',
        controller: 'MapaCtrl',
        controllerAs: 'mapa'
      })
      .when('/activos', {
        templateUrl: 'views/clientesactivos.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/inactivos', {
        templateUrl: 'views/clientesinactivos.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/personal', {
        templateUrl: 'views/personal.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/amigos', {
        templateUrl: 'views/amigos.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
