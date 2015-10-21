(function(module) {	

	var myFocus = function() {
	  return {
		link: function(scope, element, attrs) {
			element[0].focus(); 

		}
		
		
	  };
	};
	
	module.directive("myFocus", myFocus);
}(angular.module("app")));