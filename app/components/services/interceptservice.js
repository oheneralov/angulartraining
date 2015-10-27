/**
 * Created by Oleksandr_Generalov on 10/22/2015.
 */
(function (module) {
    var authInterceptor = function ($injector, $location, $q) {
        return {
            request: function (config) {
                var authService = $injector.get('UserFactory');
                var token = authService.getToken();
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                return config;
            },
            responseError: function (response) {
                if (response.status === 401 || response.status === 403) {
                    $location.url('/home');
                }
                return $q.reject(response);
            }
        }
    }
    module.factory("authInterceptor", authInterceptor);
}(angular.module("app")));

