"use strict";
angular.module("app", ['ngRoute','ngCookies' ])
.config(
		function($routeProvider, $locationProvider) {
	  $routeProvider
	   .when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'indexController',
		resolve: {
		  CatsFactory: function($q, $timeout, CatsFactory) {
		  var deferred = $q.defer();
			CatsFactory.getCats().then(
			
				function(response){
					deferred.resolve(response);
				},
				function(response){				
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
	  .when('/about', {
		template: 'This task was done by Oleksandr.',
	  })
	  
	  .otherwise({ redirectTo: "/home" });
	  
	}
	
	);
