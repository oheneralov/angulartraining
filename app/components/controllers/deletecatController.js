(function(module) {

var deletecatController = function ($scope, $routeParams, CatsFactory) {

	$scope.cat = CatsFactory.getCatbyId($routeParams.id);
	CatsFactory.delete($scope.cat);
	//console.log("params " + $routeParams.id);
		

		
		
    };
	
	module.controller("deletecatController", deletecatController);
	}(angular.module("app")));
	