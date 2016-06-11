angular.module('controllers', [])

.controller('IssuesCtrl', function($scope, Issue) {

   Issue.get_unconverted(function(result){
        $scope.issues = result.issues;
    });
    

})


.controller('IssueDetailCtrl', function($scope, Issue,$stateParams) {

  Issue.get_pages($stateParams.id,function(result){
    
        $scope.pages = result.pages;

        console.log($scope.pages);

  })

  Issue.get_text($stateParams.id,function(result){
    
 
        $scope.text = result.text;
    

  })


})


;
