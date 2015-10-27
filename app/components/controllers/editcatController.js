﻿(function (module) {

    var editcatController = function ($scope, $routeParams, $location, CatsFactory) {
        $scope.cat = CatsFactory.getCatbyId($routeParams.id);
        $scope.saveCat = function (event, cat) {
            event.preventDefault();
            CatsFactory.saveeditedCat(cat);
            $location.path("/home");
        }

    };

    module.controller("editcatController", editcatController);
}(angular.module("app")));
	