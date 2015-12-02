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

    .controller('AppController', function ($scope) {

    });
