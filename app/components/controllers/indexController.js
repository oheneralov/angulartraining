(function(module) {
	var indexController = function ($scope, CatsFactory) {
		
		$scope.catsinfo = CatsFactory;
		$scope.cat2display = $scope.catsinfo[0];
				

		$scope.incrementClicks = function(currentcat, isup){
			if (isup == true){
				currentcat.votes++;
			}
			else{
				currentcat.votes--;
			}
		}
		
		$scope.showCat = function(currentcat){
			currentcat.isviewed = true;
			$scope.cat2display = currentcat;
		}
		
		$scope.searchCats = function(searchedCat){
			$scope.searchText = searchedCat;
		}
		

		
		
    };
		
	module.controller("indexController", indexController);
	

	}(angular.module("app")));
	