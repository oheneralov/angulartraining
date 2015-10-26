/**
 * Created by Oleksandr_Generalov on 10/20/2015.
 */
(function(module) {
    var generalController = function ($scope, $cookies, UserFactory) {
        $scope.$watch(
            UserFactory.getUser,
            function(userinfo){
                //console.log(userinfo);
                if (userinfo){
                    $scope.isloggedin = true;
                    $scope.greeting = "logged in as " + userinfo.login;
                    //console.log($scope.isloggedin);

                }
            }
        );





    };

    module.controller("generalController", generalController);


}(angular.module("app")));
