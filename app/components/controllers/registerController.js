(function (module) {
    var registerController = function ($scope, $window, $location, UserFactory) {
        $scope.saveuser = function (event, user) {
            $scope.errormsg = "";
            var result = UserFactory.registerUser(user);

            result.then(
                function (result) {
                    if (result.status == 200) {
                        $location.path("/login");
                    }
                }, function (err) {
                    $scope.errormsg = "Error! Please try once more!"
                });

        }


    };

    module.controller("registerController", registerController);


}(angular.module("app")));
	