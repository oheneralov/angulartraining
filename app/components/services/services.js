(function(module) {	
	var CatsFactory = function($http) {
     
    var factory = {}; 
 
    factory.getCats = function() {
      
		
		return $http.get('/cats').then(function(data) {
			return data.data;
		});

    }
	
	factory.saveCat = function(data) {
      
		return $http.post('/cats', data).then(function(data) {
		});
    }
 
 
    return factory;
	}
	
module.factory("CatsFactory", CatsFactory);	
}(angular.module("app")));