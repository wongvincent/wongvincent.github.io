var app = angular.module('app')

    .controller('HomeController', ['$scope', function ($scope) {
        $scope.instagramPics = [
            {
                "href": "https://www.instagram.com/p/-zawaiKW5F/",
                "img": "public/img/mylife/instagram5.jpg",
                "text": "Capilano Canyon"
            },
            {
                "href": "https://www.instagram.com/p/9ZqS6QKW6W/",
                "img": "public/img/mylife/instagram3.jpg",
                "text": "Platy and Cardinal Tetras"
            },
            {
                "href": "https://www.instagram.com/p/-zaPxzqW4J/",
                "img": "public/img/mylife/instagram4.jpg",
                "text": "Inukshuk - Mt. Seymour"
            },
            {
                "href": "https://www.instagram.com/p/9KYsWyKW7d/",
                "img": "public/img/mylife/instagram2.jpg",
                "text": "Ochre sea star"
            },
            {
                "href": "https://www.instagram.com/p/1eEFdTKW1h/",
                "img": "public/img/mylife/instagram1.jpg",
                "text": "Coal Harbour"
            }
        ]
    }]);