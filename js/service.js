angular.module('UserService', [])                           //[] means no other dependencies - no other files. 
    .factory('UserAPIService', function($http) {
 
        UserAPIService = {
            callAPI: function(url, data) {
                return $http.post(url, data);
            }
        };
        return UserAPIService;
    });