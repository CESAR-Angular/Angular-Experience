'use strict';

angular.module('app').service("productDataService",
    function($resource) {
        var self = this;
        var resource = $resource('api/products/:id', {id: '@id'});
        self.getProducts = function() {
            return resource.get();
        };
    }
);

