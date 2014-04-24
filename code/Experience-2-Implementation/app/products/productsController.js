'use strict';

angular.module('app').controller('productsController', function() {
    var vm = this;
    vm.getProducts = function() {
        return products;
    };
});