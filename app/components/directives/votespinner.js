(function(module) {	
	var  voteSpinner = function() {
		//debugger;
	  return {
		 scope: {
			 votes: '=voteSpinner'
		 },
		 
		link: function(scope, element, attrs) {
				//debugger;
			scope.incrementClicks = function(isup){
			if (isup == true){
				scope.votes++;
			}
			else{
				scope.votes--;
			}
		}

		},
		templateUrl: "templates/votespinner.html"
		
		
	  };
	};
	



	module.directive("voteSpinner", voteSpinner);
	
	}(angular.module("app")));