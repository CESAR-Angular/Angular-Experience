'use strict';


angular.module('app', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/cart', {
            templateUrl: 'app/cart/cart.html'
        });
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'productsController as products'
        });

        $locationProvider.html5Mode(true);

    }
);