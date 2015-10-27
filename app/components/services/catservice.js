(function (module) {
        var CatsFactory = function ($http, $resource) {
            var factory = {};
            var catsList;
            var Cat = $resource('/cats/:catId', {catId: '@id'},
                {put: {method: 'PUT'}});
            factory.getCats = function () {
                var mycats = Cat.query(function () {
                });
                catsList = mycats;
                return mycats.$promise;

            }
            factory.saveCat = function (data) {
                var mycats = Cat.save(data);
                return mycats.$promise;
            }
            factory.saveeditedCat = function (data) {

                var mycats = Cat.put(data, function () {
                });
                return mycats.$promise;
            }
            factory.delete = function (data) {
                var result = data.$delete();
                console.log(result);
                return result;
            }
            factory.getCatslist = function () {

                return catsList;
            }
            factory.getCatbyId = function (id) {
                var mycat = Cat.get({catId: id});
                console.log(mycat);
                return mycat;
            }
            return factory;
        }

        module.factory("CatsFactory", CatsFactory);
    }
    (angular.module("app"))
)
;