var app = angular.module('app', ['ngRoute', 'angular-scroll-animate', 'angulartics', 'angulartics.google.analytics', 'smooth-scroll']);

app.config(['$routeProvider', '$analyticsProvider', function ($routeProvider, $analyticsProvider) {

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

    $analyticsProvider.firstPageview(true); /* Records pages that don't use $state or $route */
    $analyticsProvider.withAutoBase(true);  /* Records full path */
}])

    .controller('AppController', ['$scope', '$smoothScroll', function ($scope, $smoothScroll) {
        var date = new Date();
        $scope.year = date.getFullYear();

        $scope.scrollTo = function(id) {
            $smoothScroll.slow("#" + id);
        };


        //leverages animate.css classes

        //jQuery function that executes animation. Use like $('#element').animateCss('bounce');
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function() {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });

        //ANIMATE IN
        $scope.animateInFadeIn = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeIn');
        };

        $scope.animateInFadeInDown = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated fadeInDown');
        };

        $scope.animateInZoomIn = function($el) {
            $el.removeClass('hidden');
            $el.addClass('animated zoomIn');
        };
    }]);
