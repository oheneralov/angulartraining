(function(module) {

var addcatController = function ($scope, $location, CatsFactory) {
		
		CatsFactory.getCats().then(
			function(data){
				$scope.catsinfo = data;
				$scope.cat2display = $scope.catsinfo[0];
				
			}
		)
		
		$scope.saveCat = function(event, cat){
			event.preventDefault();
			CatsFactory.saveCat(cat);
			$location.path("/home");
		}
		

		
		
    };
	
	module.controller("addcatController", addcatController);
	}(angular.module("app")));
	