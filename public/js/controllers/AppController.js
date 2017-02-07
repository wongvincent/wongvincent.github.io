var app = angular.module('app', ['ngRoute', 'angular-scroll-animate', 'angulartics', 'angulartics.google.analytics', 'smooth-scroll']);

app.config(['$routeProvider', '$locationProvider', '$analyticsProvider', function ($routeProvider, $locationProvider, $analyticsProvider) {

    //$locationProvider.html5Mode(true).hashPrefix('!')

    $routeProvider
        .when('/', {
            //redirectTo: '/underconstruction'
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/home', {
            redirectTo: '/'
        })
        .when('/underconstruction', {
            templateUrl: 'views/underconstruction.html',
        })
        .otherwise({
            templateUrl: 'views/404.html'
        });
}])

    .controller('AppController', ['$scope', '$smoothScroll', function ($scope, $smoothScroll) {
        var date = new Date();
        $scope.year = date.getFullYear();

        $scope.scrollTo = function(id) {
            $smoothScroll.slow("#" + id);
        };


        //leverages animate.css classes

        //ANIMATE IN
        $scope.animateInFadeIn = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeIn');
        };

        $scope.animateInFadeInDown = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeInDown');
        };

        $scope.animateInTada = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated tada');
        };
        $scope.animateInZoomIn = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated zoomIn');
        };
    }]);
