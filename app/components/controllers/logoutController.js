/**
 * Created by Oleksandr_Generalov on 10/21/2015.
 */
(function(module) {
    var logoutController = function ($scope, $cookies, UserFactory) {
        UserFactory.logout();
    };

    module.controller("logoutController", logoutController);


}(angular.module("app")));

