/**
 * Created by Oleksandr_Generalov on 10/20/2015.
 */
(function (module) {
    var UserFactory = function ($http, $cookies, $window, $q) {
        var factory = {};
        var token = $window.localStorage.getItem('token');
        var userinfo = angular.fromJson($cookies.get("userinfo"));
        factory.loginUser = function (user) {
            var deferred = $q.defer();
            $http.post('/auth', user).then(function (response) {
                token = response.data.token;
                $window.localStorage.setItem('token', token);
                userinfo = response.data.user;
                $cookies.put("userinfo", angular.toJson(userinfo));

                deferred.resolve(response);
            }, function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };
        factory.logout = function () {
            userinfo = null;
            token = undefined;
            $window.localStorage.removeItem('token');
            $cookies.remove("userinfo");
        }
        factory.getUser = function () {
            return userinfo;
        };
        factory.checkPermission = function (owner) {
            var res = false;
            if (!userinfo) {
                return false;
            }
            if (userinfo.login == owner) {
                res = true;
            }
            return res;
        };
        factory.getToken = function () {
            return token;
        }
        factory.checkauth = function () {
            var isauth = false;
            if (token) {
                isauth = true;
            }
            return isauth;
        }
        factory.registerUser = function (user) {
            var deferred = $q.defer();
            $http.post('/register', user).then(
                function (response) {
                    deferred.resolve(response);
                },
                function (response) {
                    deferred.reject(response);
                }
            )
            return deferred.promise;
        }
        return factory;
    }
    module.factory("UserFactory", UserFactory);
}(angular.module("app")));