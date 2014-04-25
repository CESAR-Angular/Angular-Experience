'use strict';


angular.module('app', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/cart', {
            templateUrl: 'app/cart/cart.html'
        });
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'productController as productController'
        });

        $locationProvider.html5Mode(true);

    }
);