(function (module) {
    var indexController = function ($scope, CatsList, CatsFactory, UserFactory) {
        $scope.catsinfo = CatsList;
        $scope.cat2display = $scope.catsinfo[0];
        $scope.showCat = function (currentcat) {
            currentcat.isviewed = true;
            $scope.cat2display = currentcat;
            $scope.hasPermission = UserFactory.checkPermission(currentcat.owner);
        }
        $scope.searchCats = function (searchedCat) {
            $scope.searchText = searchedCat;
        }
        $scope.updateCat = function (cat) {
            CatsFactory.saveeditedCat(cat);
        }


    };

    module.controller("indexController", indexController);


}(angular.module("app")));
	