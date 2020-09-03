angular.module('MyApp').controller('ordersController', ['$scope', '$http','$route', function($scope, $http,$route){
    
    $scope.fetchAllData=function(){
         $http({
            method: 'get',
            url: 'fetchOrderedItems.php',
           }).then(function successCallback(response) {
            // Store response data
            $scope.ordereditems = response.data;
           });
    }
    $scope.fetchAllData();

    $scope.deleteOrders=function(orderId){

        if(confirm("Do you want to delete?")){
            $http({
                method: "post",
                url: "deleteOrderedItem.php",
                data: {
                    orderId: orderId
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function successCallback(response) {
                   // Store response data
                   alert("Successfully deleted");
                   $route.reload();
                   
               });
        }    
    }

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    
}]);

