"use strict";
angular.module("app", ['ngRoute', 'ngCookies', 'ui.bootstrap', 'ngResource'])
    .config(
    function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'indexController',
                resolve: {
                    CatsList: function ($q, $timeout, CatsFactory) {
                        var deferred = $q.defer();
                        CatsFactory.getCats().then(
                            function (response) {
                                deferred.resolve(response);
                            },
                            function (response) {
                                deferred.reject(response);
                            }
                        );

                        return deferred.promise;
                    }
                }
            })
            .when('/addcat', {
                controller: 'addcatController',
                templateUrl: 'templates/addcat.html',
            })
            .when('/register', {
                controller: 'registerController',
                templateUrl: 'templates/register.html',
            })
            .when('/login', {
                controller: 'loginController',
                templateUrl: 'templates/login.html',
            })
            .when('/logout', {
                controller: 'logoutController',
                template: 'you are logged out!',
            })
            .when('/edit/:id', {
                controller: 'editcatController',
                templateUrl: 'templates/editcat.html',
            })
            .when('/delete/:id', {
                controller: 'deletecatController',
                template: 'The cat was deleted!',
            })
            .when('/about', {
                template: 'This task was done by Oleksandr.',
            })

            .otherwise({redirectTo: "/home"});
        $httpProvider.interceptors.push('authInterceptor');

    }
);
