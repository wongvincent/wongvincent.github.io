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
            //redirectTo: '/underconstruction'
            templateUrl: 'views/projects.html'
        })
        .when('/resume', {
            //redirectTo: '/underconstruction'
            templateUrl: 'views/resume.html'
        })
        .when('/contact', {
            //redirectTo: '/underconstruction'
            templateUrl: 'views/contact.html'
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

        //ANIMATE IN

        $scope.animateInBounceInDown = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated bounceInDown');
        };

        $scope.animateInFadeIn = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeIn');
        };

        $scope.animateInFadeInDown = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeInDown');
        };

        $scope.animateInFadeInDownBig = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeInDownBig');
        };

        $scope.animateInFadeInUp = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeInUp');
        };

        $scope.animateInFlipInX = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated flipInX');
        };

        $scope.animateInPulse = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated pulse');
        };

        $scope.animateInTada = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated tada');
        };
        $scope.animateInZoomIn = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated zoomIn');
        };

        $scope.animateInZoomInUp = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated zoomInUp');
        };



        //ANIMATE OUT

        $scope.animateOutFlipOutX = function($el) {
            $el.addClass('hidden');
            $el.removeClass('animated flipOutX');
        };

        $scope.animateOutZoomOut = function($el) {
            $el.addClass('hidden');
            $el.removeClass('animated zoomOut');
        };
    });
