angular.module('controllers', [])

.controller('IssuesCtrl', function($scope, Auth) {

   console.log('IssuesCtrl');
   Auth.alert();
    

});
