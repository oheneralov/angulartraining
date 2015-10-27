/**
 * Created by Oleksandr_Generalov on 10/23/2015.
 */
(function (module) {
    var ModalController = function ($scope, $uibModal) {
        $scope.ok = function () {
            $uibModal.close("ok");
        };

        $scope.cancel = function () {
            $uibModal.dismiss('cancel');
        };

    };

    module.controller("ModalController", ModalController);


}(angular.module("app")));

