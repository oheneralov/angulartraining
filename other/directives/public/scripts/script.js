angular.module('docsTemplateUrlDirective', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.format = 'M/d/yy h:mm:ss a';
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])
.directive('myCustomer', ['$interval', 'dateFilter', function() {
	

  return {
	restrict: 'AE',
	scope : {
		age : "="
	},
	
    templateUrl: function(elem, attr){
      return 'customer-'+attr.type+'.html';
    }
  };
}])
.directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {
	
    function link(scope, element, attrs) {
    var format,
        timeoutId;

    function updateTime() {
      element.text(dateFilter(new Date(), format));
    }

    scope.$watch(attrs.myCurrentTime, function(value) {
      format = value;
      updateTime();
    });

    element.on('$destroy', function() {
      $interval.cancel(timeoutId);
    });

    // start the UI update process; save the timeoutId for canceling
    timeoutId = $interval(function() {
      updateTime(); // update DOM
    }, 1000);
  }

  return {
	link: link,
	restrict: 'AE'
  };
}])
;