(function(module) {
	var voteFilter = function () {
		return function(input) {
			var result = '<img src = "http://localhost/images/neutral.jpg">';
			if (input > 0){
				result = '<img src = http://localhost/images/good.jpg">';
			}
			if (input < 0){
				result = '<img src = http://localhost/images/negative.jpg">';
			}
			return result;
		};
		
	}
	
	module.filter("voteFilter", voteFilter);
	
}(angular.module("app")));