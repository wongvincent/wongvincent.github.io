var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true).hashPrefix('!')

    $routeProvider
        .when('/', {
            templateUrl: 'views/underconstruction.html',
            controller: 'HomeController'
        })
        .otherwise({
            templateUrl: 'views/404.html',
            controller: 'HomeController'
        });
}])
    .run(['$rootScope', '$window', '$location', function ($rootScope, $window, $location) {
        $window.ga('create', 'UA-70991808-1', 'auto');
        $rootScope.$on('$stateChangeSuccess', function (event) {
            $window.ga('send', 'pageview', $location.path());
        });
    }]
)

    .controller('AppController', function ($scope) {

    });
