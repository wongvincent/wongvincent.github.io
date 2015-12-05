var app = angular.module('app')

    .controller('HomeController', function ($scope) {
        $scope.instagramPics = [
            {
                "href": "https://www.instagram.com/p/-zawaiKW5F/",
                "img": "public/img/mylife/instagram5.png",
                "text": "Capilano Canyon"
            },
            {
                "href": "https://www.instagram.com/p/9ZqS6QKW6W/",
                "img": "public/img/mylife/instagram3.png",
                "text": "Platy and Cardinal Tetras"
            },
            {
                "href": "https://www.instagram.com/p/-zaPxzqW4J/",
                "img": "public/img/mylife/instagram4.png",
                "text": "Inukshuk - Mt. Seymour"
            },
            {
                "href": "https://www.instagram.com/p/9KYsWyKW7d/",
                "img": "public/img/mylife/instagram2.png",
                "text": "Ochre sea star"
            },
            {
                "href": "https://www.instagram.com/p/1eEFdTKW1h/",
                "img": "public/img/mylife/instagram1.png",
                "text": "Coal Harbour"
            }
        ]
    });