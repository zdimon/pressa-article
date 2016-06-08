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

          
    })
