'use strict';
var app = angular.module("MyApp",['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "homepage/homepage.html"
    })
    .when("/recipebook", {
        templateUrl: "recipe_book/recipebook.html",
        controller: "recipebookController"
    })
    .when("/shoppinglist", {
        templateUrl: "shoppinglist/shoppinglist.html",
        controller: "shoppingController"
    })
    .when("/orders", {
        templateUrl: "orderedlist/customerorders.html",
        controller: "ordersController"
    });
  });
app.controller('HomeController',function($scope){
});

app.service("RecipeService",function($http,$route){
     
    var recipeService = {};
    var existData=[];
    var amountTotal;
    recipeService.addToShop = function(foodId,name,amount,quantity){
       amountTotal=quantity*amount;
       var request = $http({
        method: "post",
        url: "insertShoppingList.php",
        data: {
            foodId: foodId,
            name: name,
            amount:amount,
            quantity:quantity,
            amountTotal:amountTotal
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(function successCallback(response) {
        alert("Successfully added to shop");
       });
    };
    
    recipeService.deleteCardData=function(shoppingId){
        $http({
            method: "post",
            url: "deleteCardData.php",
            data: {
                shoppingId: shoppingId
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function successCallback(response) {
               // Store response data
               alert("successfully deleted");
               $route.reload();
                return true;
           });
    }

    recipeService.saveEdit= function(shoppingId,totalAmount,quantity){
        var updateRequest = $http({
            method: "post",
            url: "update.php",
            data: {
                shoppingId: shoppingId,
                totalAmount: totalAmount,
                quantity: quantity,
                'action':'save_edit'
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function successCallback(response) {
            // Store response data
            alert("successfully updated");
            $route.reload();
           });
    }

   return recipeService;
});





