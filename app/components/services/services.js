(function (module) {
        var CatsFactory = function ($http) {

            var factory = {};
            var catsList;

            factory.getCats = function () {


                return $http.get('/cats').then(function (data) {
                    catsList = data.data;
                    return data.data;
                });

            }

            factory.saveCat = function (data) {
				//console.log(data);

                return $http.post('/cats/', data).then(function (data) {
                });
            }

            factory.saveeditedCat = function (data) {
				//console.log(data);
                return $http.put('/cats/' + data.id, data).then(function (data) {
                });
            }


            factory.delete = function (id) {

                return $http.delete('/cats/' + id).then(function (data) {
                });
            }

            factory.getCatslist = function () {

                return catsList;
            }
			
			
			

            factory.getCatbyId = function (id) {
                var searchedCat;

                angular.forEach(catsList, function (value, key) {
                    if (value.id == id) {
                        searchedCat = value;
                    }
                }, searchedCat);
                return searchedCat;
            }


            return factory;
        }

        module.factory("CatsFactory", CatsFactory);
    }
    (angular.module("app"))
)
;