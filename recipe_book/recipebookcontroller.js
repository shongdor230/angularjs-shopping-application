
angular.module('MyApp').controller('recipebookController',function($scope,$route,$http,$routeParams,$rootScope, $location,RecipeService){
    var obj=[];
    $scope.quantityOptions=[1,2,3,4,5,6,7,8,9,10];
     var data=[];
       $scope.getDetails=function(){
        $http({
            method: 'get',
            url: 'getData.php'
           }).then(function successCallback(response) {
            // Store response data
            $scope.foodItems = response.data;
           });
       }
        $scope.getDetails();
        $scope.newRecipe = function(){
            $scope.selectedItem = null;
            $scope.updateId=null;
            $scope.showInput=true;
            $scope.showDetails=false;
            $scope.itemName=null;
            $scope.imgUrl=null;
            $scope.description=null;
            $scope.price=null;
        }
    
        $scope.save = function(itemName,imgUrl,price,description){
          if($scope.updateId){
               var updateRequest = $http({
                method: "post",
                url: "update.php",
                data: {
                    foodId: $scope.updateId,
                    itemName: itemName,
                    imgUrl: imgUrl,
                    price: parseInt(price),
                    description: description,
                    'action':'update_recipe'
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function successCallback(response) {
                // Store response data
                alert("Successfully Edited");
                $scope.itemName =null;
                   $scope.imgUrl =null;
                   $scope.price=null;
                   $scope.description=null;
                $location.path("/recipebook");
               });
    
            }else{
        
                var request = $http({
                    method: "post",
                    url: "insert.php",
                    data: {
                        itemName: itemName,
                        imgUrl: imgUrl,
                        price: price,
                        description: description,
                        'action':'insert_new_recipe'
                    },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function successCallback(response) {
                   $scope.success=true;
                   $scope.successMessage="Added to card successfully";
                   alert("Successfully added");
                   $route.reload();
                   $scope.itemName =null;
                   $scope.imgUrl =null;
                   $scope.price=null;
                   $scope.description=null;
                   });
                }
        }
    
        $scope.saveIngredient=function(foodId,ingredient1,ingredient2){
            alert(foodId);
            var request = $http({
                method: "post",
                url: "insert.php",
                data: {
                    foodId:foodId,
                    ingredient1:ingredient1,
                    ingredient2:ingredient2,
                    'action':'save_ingredients'
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function successCallback(response) {
               $scope.success=true;
               $scope.successMessage="Added to card successfully"
               alert(response.data);
               });
        }
        
        
        $scope.selectedFood = function(data){
            $scope.selectedItem = null;
            $scope.showDetails=true;
            $scope.id =data.foodId;
            $scope.name= data.itemName;
            $scope.imgUrl = data.imgUrl;
            $scope.price=data.price;
            $scope.description=data.description;
            //this.data.highlighted = true;
            $scope.showDetails=true;
            $scope.showInput=false;
            $scope.selectedItem = data;
            //$location.path("/shoppinglist");
        }
    
        $scope.addToShop =function(id,name,amount,quantity){
            RecipeService.addToShop(id,name,amount,quantity);
        }
       
        $scope.editRecipe=function(id,name,imgUrl,price,description){
            $scope.showInput=true;
            $scope.showDetails=false;
            $scope.itemName =name;
            $scope.imgUrl =imgUrl;
            $scope.updateId=id;
            $scope.price=price;
            $scope.description=description;
            
        }
    
        $scope.deleteRecipe= function(foodId){
            if(confirm("Are you sure you want to delete this recipe?")){
            $http({
                method: "post",
                url: "deleteData.php",
                data: {
                    foodId: foodId
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function successCallback(response) {
                // Store response data
                alert("Successfully deleted");
                $route.reload();
               });
            }
        }
        $scope.cancel=function(){
            $scope.selectedItem=null;
             $scope.showInput=false;
        }
       
    });