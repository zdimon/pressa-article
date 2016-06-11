if(window.location.href.indexOf("localhost")==-1) {
var server_url = 'http://api.pressa.ru/moderator';
} else {
var server_url = 'http://pressa.local/moderator';
}

    var app = angular.module('ArticleApp', [
        'ui.router',
        'restangular',
        'controllers',
        'services',
    ])

    app.config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('index', {
                
                url: "/",
                templateUrl: "/static/templates/index.html",
            })
            .state('issues', {
                
                url: "/issues",
                controller: 'IssuesCtrl',
                templateUrl: "/static/templates/issues.html",
            })
            .state('issue_detail', {
              url: '/issue/detail/:id',
              templateUrl: '/static/templates/issue_detail.html',
              controller: 'IssueDetailCtrl'       
            })

          
    })
