

var ctrl = angular.module('MediaCtrl', []);

ctrl.controller('Home', ['$scope', function($scope, $http) {
	$scope.where = 'Home Page';
	$scope.MessageIn = "Message";

	this.sendMail=function() {
		var data = ({
                InputName : this.InputName,
                InputEmail : this.InputEmail,
                InputPhone : this.InputPhone,
                InputMessage : this.InputMessage
            });

		$http.post('/contact-form', data).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
 
                    
 
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
	}

}]);

ctrl.controller('NavCtrl', ['$scope', '$state', function($scope, $state) {

}]);