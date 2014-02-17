var app = angular.module('shopApp', [])
    .controller('CartController', function CartController($scope) {
    $scope.items = [
        {
            title: 'Widget A',
            quantity: 8,
            price: 3.95
        }, {
            title: 'Widget B',
            quantity: 80,
            price: 1.45
        },{
            title: 'Widget C',
            quantity: 18,
            price: 2.25
        }
    ];
    $scope.remove = function(index) {
        $scope.items.splice(index, 1);

    };

    $scope.add = function(index) {
        $scope.items.splice(index + 1, 0, {
            title: 'Widget X',
            quantity: index + 1,
            price: 13.95
        });

    };

    $scope.totalPrice = function() {
        var total = 0;
        i = 0;
        for (i = 0; i < $scope.items.length; i++) {
            total += ($scope.items[i].price * $scope.items[i].quantity);

        }
        return total;
    };

});