/**
 * Created by Oleksandr_Generalov on 10/20/2015.
 */
(function(module) {
    var UserFactory = function($http, $cookies, $window) {

        var factory = {};

        factory.loginUser = function(user) {
            var usermodel = angular.fromJson(sessionStorage.userService);
            console.log(usermodel);
            console.log(user);
            if ((user.name == usermodel.name) && (user.password == usermodel.password)){
                console.log("saving to cookies user info");
                $cookies.put('user', angular.toJson(user));

            }

            };



        factory.getUser = function() {

            var userfromcookie = angular.fromJson($cookies.get('user'));
            console.log(userfromcookie);
                return userfromcookie;


        };

        factory.registerUser = function(user) {

            $window.sessionStorage.userService = angular.toJson(user);


        }


        return factory;
    }

    module.factory("UserFactory", UserFactory);
}(angular.module("app")));