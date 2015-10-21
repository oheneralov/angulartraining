(function(module) {	
	var  myInnerform = function() {
		
	  return {
		 scope: {
			 url: '=myInnerform'
		 },
		 
		link: function(scope, element, attrs) {
			//scope.url = attrs.cat.imageurl;

		},
		templateUrl: "templates/innerform.html"
		
		
	  };
	};
	
	module.directive("myInnerform", myInnerform);
	}(angular.module("app")));
	