/**
 * Created by Oleksandr_Generalov on 10/21/2015.
 */
(function (module) {
    var logoutController = function ($scope, $cookies, $location, $uibModal, UserFactory) {
         var modalInstance = $uibModal.open({
         animation: $scope.animationsEnabled,
         templateUrl: 'templates/logoutmodal.html',
         controller: 'ModalController',
         size: 50,
         resolve: {
         items: function () {
         return $scope.items;
         }
         }
         });

         modalInstance.result.then(function (selectedItem) {
         $location.path("/home");
         UserFactory.logout();
         }, function () {
         console.log('Modal dismissed at: ' + new Date());
         });

    };


    module.controller("logoutController", logoutController);


}(angular.module("app")));

