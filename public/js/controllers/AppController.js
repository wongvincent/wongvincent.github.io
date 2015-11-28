var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/underconstruction.html',
            controller: 'HomeController'
        })

        .otherwise({redirectTo: '/'});
}])

    .controller('AppController', function ($scope) {

    });
