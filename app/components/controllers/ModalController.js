/**
 * Created by Oleksandr_Generalov on 10/23/2015.
 */
(function (module) {
    var ModalController = function ($scope, $modalInstance) {
        $scope.ok = function () {
            $modalInstance.close("ok");
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    };

    module.controller("ModalController", ModalController);


}(angular.module("app")));

