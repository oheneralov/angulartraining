(function(module) {	 
 var mySubmit = function($parse) {
	  return {
		link: function(scope, element, attrs) { 
		var fn = $parse(attrs.ngSubmit)
			
		element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        fn(scope);
                    });

                    event.preventDefault();
                }
		});
		
		
		
	  }
	  };
	  };
	  
	module.directive("mySubmit", mySubmit);

}(angular.module("app")));