(function (module) {
    var voteSpinner = function () {
        return {
            scope: {
                cat2display: '=voteSpinner',
                updatefun: '&'

            },
            link: function (scope, element, attrs) {
                //debugger;
                scope.incrementClicks = function (isup) {
                    if (!scope.cat2display.votes) {
                        scope.cat2display.votes = 0;
                    }
                    if (isup == true) {
                        scope.cat2display.votes++;
                    }
                    else {
                        scope.cat2display.votes--;
                    }
                    scope.updatefun();
                }

            },
            templateUrl: "templates/votespinner.html",
        };
    };


    module.directive("voteSpinner", voteSpinner);

}(angular.module("app")));