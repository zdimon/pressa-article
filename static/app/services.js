angular.module('services', [])

.factory('Auth', ['$http', function($http, $rootScope) {
            return {
                        alert: alert 
                   }

    function alert() {
        console.log('services');
    };
}]);

