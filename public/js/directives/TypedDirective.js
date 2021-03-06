var app = angular.module('app')
.directive('animatedTyping', function(){
        return{
            restrict: 'E',
            link: function(scope, element, attrs){
                $(element).typed({
                    strings: [attrs.text],
                    typeSpeed: 100
                });
            }
        }
    });