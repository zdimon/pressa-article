angular.module('services', [])

.factory('Auth', ['$http', function($http, $rootScope) {
            return {
                        alert: alert 
                   }

    function alert() {
        console.log('services');
    };
}])

.factory('Issue', ['$http', function($http, $rootScope) {

    return {
                get_unconverted: get_unconverted,
                get_pages: get_pages,
                get_text: get_text  
           }

    function get_unconverted(callback) {
        return $http.get(server_url+'/get_unconverted').success(callback);
    };


    function get_pages(issue_id,callback) {
        return $http.get(server_url+'/get_pages/'+issue_id).success(callback);
    };

    function get_text(issue_id,callback) {
        return $http.get(server_url+'/'+issue_id+'/get_text/').success(callback);
    };

}])


;

