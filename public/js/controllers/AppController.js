var app = angular.module('app', ['ngRoute', 'angular-scroll-animate', 'angulartics', 'angulartics.google.analytics']);

app.config(['$routeProvider', '$locationProvider', '$analyticsProvider', function ($routeProvider, $locationProvider, $analyticsProvider) {

    //$locationProvider.html5Mode(true).hashPrefix('!')

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/home', {
            redirectTo: '/'
        })
        .when('/projects', {
            redirectTo: '/underconstruction'
            //templateUrl: 'views/projects.html'
        })
        .when('/resume', {
            //redirectTo: '/underconstruction'
            templateUrl: 'views/resume.html'
        })
        .when('/contact', {
            redirectTo: '/underconstruction'
            //templateUrl: 'views/contact.html'
        })
        .when('/underconstruction', {
            templateUrl: 'views/underconstruction.html',
        })
        .otherwise({
            templateUrl: 'views/404.html'
        });

    $analyticsProvider.firstPageview(true); /* Records pages that don't use $state or $route */
    $analyticsProvider.withAutoBase(true);  /* Records full path */
}])

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

        $scope.animateInFadeInDown = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeInDown');
        };

        $scope.animateOutFadeInDown = function($el) {
            $el.addClass('hidden');
            $el.removeClass('animated fadeInDown');
        };

        $scope.animateInFadeInUp = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeInUp');
        };

        $scope.animateOutFadeInUp = function($el) {
            $el.addClass('hidden');
            $el.removeClass('animated fadeInUp');
        };

        $scope.animateInFlipInX = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated flipInX');
        };

        $scope.animateOutFlipInX = function($el) {
            $el.addClass('hidden');
            $el.removeClass('animated flipInX');
        };

        $scope.animateInPulse = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated pulse');
        };

        $scope.animateOutPulse = function($el) {
            $el.addClass('hidden');
            $el.removeClass('animated pulse');
        };

        $scope.animateInTada = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated tada');
        };

        $scope.animateOutTada = function($el) {
            $el.addClass('hidden');
            $el.removeClass('animated tada');
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
