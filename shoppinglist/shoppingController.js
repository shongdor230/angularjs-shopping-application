angular.module('MyApp').controller('shoppingController',function($scope,$http,$route,$location,RecipeService){
   
    //$scope.rp="Route parameter value"+.shoppingItems[0].itemName;
    $scope.updateId=null;
    $scope.success = false;
    $scope.fetchData=function(){
        $http({
            method: 'get',
            url: 'fetchShoppingItem.php'
            
           }).then(function successCallback(response) {
            // Store response data
            $scope.shoppingItem = response.data;
           });
        }
        $scope.fetchData();
    

    $scope.fetchSingleData=function(data){
        $scope.shoppingId = data.shoppingId;
        $scope.foodName=data.foodName;
        $scope.amount=data.amount_per_item;
        $scope.quantity=data.quantity;
        $scope.totalAmount=data.amount_total;

    }

    $scope.saveEdit=function(shoppingId,quantity,amount){
        $scope.totalAmount = amount*quantity;
        RecipeService.saveEdit(shoppingId,$scope.totalAmount,quantity);
    }

    $scope.quantityChanged = function(){
        $scope.total=$scope.amount*$scope.quantity;
    }

    $scope.deleteCardData = function(shoppingId){
        if(confirm("Are you sure you want to remove it?"))
		{
               if(RecipeService.deleteCardData(shoppingId)){   
                $scope.fetchData();
                $scope.success = true;
                alert("Deleted successfully");
                $route.reload();
               }
        }
    }

    $scope.orderFood = function(shoppingItem,fullName,phone,address){
        var myfoodCollection="";
        var counter=0;
        for(var key of Object(shoppingItem)){
            myfoodCollection=shoppingItem[counter++].FoodId+" ,"+myfoodCollection;
           // myfoodCollection= myfoodCollection.concat(shoppingItem[key].FoodId,",");
        }
        var request = $http({
            method: "post",
            url: "insert.php",
            data: {
                fullName: fullName,
                phone: phone,
                address:address,
                myfoodCollection:myfoodCollection,
                'action':'final_order'
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function successCallback(response) {
            // Store response data
            alert("Successfully ordered");
           });
    }
    $scope.addMoreItems = function(){
        $location.path("/recipebook");
    }
});