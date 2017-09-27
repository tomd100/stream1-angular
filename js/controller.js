// JavaScript File

angular.module("RouteControllers", [])
    .controller("HomeController", function($scope) {
        $scope.title = "Welcome To Angular Todo :)"
})
    .controller("RegisterController", function($scope) {
        
        $scope.registrationUser = {}
        
        // when you click submit this function is run. The link to this is in the html. 
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) { // if the registration form is valid
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
            }
                console.log($scope.registrationUser.username + " " + $scope.registrationUser.password);
            }        
        
            $scope.title = "Account Login"

});
        