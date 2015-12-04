var app = angular.module('app', ['ngRoute', 'angular-scroll-animate']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true).hashPrefix('!')

    $routeProvider
        .when('/', {
            templateUrl: 'views/underconstruction.html',
        })
        .when('/home', {
            templateUrl: '/'
        })
        .when('/projects', {
            redirectTo: '/'
        })
        .when('/resume', {
            redirectTo: '/'
        })
        .when('/contact', {
            redirectTo: '/'
        })
        .when('/underconstruction', {
            templateUrl: 'views/underconstruction.html',
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
        var date = new Date();
        $scope.year = date.getFullYear();


        //leverages animate.css classes
        $scope.animateInBounceInDown = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated bounceInDown');
        };

        $scope.animateOutBounceInDown = function($el) {
            $el.addClass('hidden');
            $el.removeClass('animated bounceInDown');
        };

        $scope.animateInPulse = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated pulse');
        };

        $scope.animateOutPulse = function($el) {
            $el.addClass('hidden');
            $el.removeClass('animated pulse');
        };

        $scope.animateInZoomInUp = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated zoomInUp');
        };

        $scope.animateOutZoomInUp = function($el) {
            $el.addClass('hidden');
            $el.removeClass('animated zoomInUp');
        };
    });
