

var ctrl = angular.module('MediaCtrl', []);

ctrl.controller('Home', ['$scope', '$http', function($scope, $http) {
	$scope.where = 'Home Page';
	$scope.MessageIn = "Message";
	$scope.data = [];
	$scope.InputName = "";
	$scope.InputEmail = "";
	$scope.InputPhone = "";
    $scope.InputBusiness = "";
	$scope.InputMessage = "";

	$scope.sendMail=function() {
		 $scope.data = ({
                InputName : $scope.InputName,
                InputEmail : $scope.InputEmail,
                InputPhone : $scope.InputPhone,
                InputBusiness : $scope.InputBusiness,
                InputMessage : $scope.InputMessage
            });

		$http.post('/contact-form', $scope.data).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
 					console.log("success");
 					console.log($scope.data);
                    
 
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("error");
                });
	}

}]);

ctrl.controller('Landing', ['$scope', '$http', function($scope, $http) {
	$scope.where = 'LandingPage';
	$scope.MessageIn = "Message";
	$scope.data = [];
	$scope.InputName = "";
	$scope.InputEmail = "";
	$scope.InputPhone = "";
	$scope.InputMessage = "";

	$scope.sendMail=function() {
		 $scope.data = ({
                InputName : $scope.InputName,
                InputEmail : $scope.InputEmail,
                InputPhone : $scope.InputPhone,
                InputMessage : $scope.InputMessage
            });

		$http.post('/contact-form', $scope.data).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
 					console.log("success");
 					console.log($scope.data);
                    
 
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("error");
                });
	}

}]);

ctrl.controller('NavCtrl', ['$scope', '$state', function($scope, $state) {
    // $scope.gotodiv = function(todiv) {
    //   // set the location.hash to the id of
    //   // the element you wish to scroll to.
    //   $location.hash(todiv);

    //   // call $anchorScroll()
    //   $anchorScroll();
}]);

ctrl.controller('MarketReview', ['$scope', '$state', function($scope, $state) {

    $scope.MessageIn = "Message";
    $scope.data = [];
    $scope.MRInputName = "";
    $scope.MRInputEmail = "";
    $scope.MRInputBusiness = "";
    $scope.MRWebsite = "";
    $scope.MRInputPhone = "";
    $scope.MRInputMessage = "";

    $scope.MRInputTwitter = "";
    $scope.MRInputInstagram = "";
    $scope.MRInputFacebook = "";
    $scope.MRInputYoutube = "";
    $scope.MRInputSnapchat = "";
    $scope.MRInputOther = "";


    $scope.sendMail=function() {
         $scope.data = ({
                InputName : $scope.MRInputName,
                InputEmail : $scope.MRInputEmail,
                InputBusiness : $scope.MRInputBusiness,
                InputWebsite : $scope.MRWebsite,
                InputPhone : $scope.MRInputPhone,
                InputMessage : $scope.MRInputMessage
            });

        $http.post('/contact-form', $scope.data).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("success");
                    console.log($scope.data);
                    
 
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("error");
                });
    }


}]);