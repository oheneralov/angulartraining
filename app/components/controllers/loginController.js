(function(module) {
	var loginController = function ($scope, $cookies, $location, UserFactory) {
		$scope.greeting = "";

		$scope.loginuser = function(user){
			var status = UserFactory.loginUser(user);
			status.then(
				function(result){
					if (result.data.status == 'success'){
						$scope.greeting = "You are logged in!";
						$location.path("/home");
					}
					else{
						$scope.greeting = "Invalid credentials!";

					}

				},
				function(error){
					$scope.greeting = "Invalid credentials!";

				}

			);

		}





	};
		
	module.controller("loginController", loginController);
	

	}(angular.module("app")));
	