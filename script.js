(function() {
    var app = angular.module('myApp', []);

    app.controller('MyController', function($scope) {
        $scope.items = [
            { name: 'Laptop', price: 1200 },
            { name: 'Mouse', price: 25 },
            { name: 'Keyboard', price: 75 },
            { name: 'Monitor', price: 300 }
        ];

        $scope.newItem = {};

        $scope.addItem = function() {
            if ($scope.newItem.name && $scope.newItem.price) {
                $scope.items.push({
                    name: $scope.newItem.name,
                    price: parseFloat($scope.newItem.price)
                });
                $scope.newItem = {}; // Clear the form
            }
        };
    });
})();