var app = angular.module('app')

    .controller('HomeController', ['$scope', function ($scope) {
        var loadBannerImage = function () {
            var initialTime = new Date().getTime();
            var background_images = ['burnaby.jpg', 'chief.jpg', 'garibaldi.jpg', 'capilano.jpg'];
            var img = new Image();

            $('.container').css('overflow', 'hidden');
            $('#down-arrow').css('visibility', 'hidden');

            img.onload = function () {
                var actualLoadtime = new Date().getTime() - initialTime;
                var desiredLoadtime = 1500;
                var waitAdditional = (actualLoadtime < desiredLoadtime) ? desiredLoadtime - actualLoadtime : 0;
                setTimeout(function () {
                    $('#banner-image').css({'background': 'url(' + img.src + ') no-repeat center center'});
                    $('#loading').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $('#loading').css("display", "none");
                    });
                    $('.container').css('overflow', 'visible');
                    $('#down-arrow').css('visibility', 'visible');
                    $('#loading').animateCss('fadeOut');
                }, waitAdditional);
            };
            img.src = 'public/img/' + background_images[Math.floor(Math.random() * background_images.length)];
        };

        loadBannerImage();

        $scope.projects = [
            {
                'name': "Hiking Vancouver",
                'description': "Android app that displays info and photos of hiking trails around Vancouver.",
                'href': "http://hike.vincentwong.me",
                'img': "public/img/projects/HikingVancouverMIN.jpg"
            },
            {
                'name': "Currency Converter",
                'description': "Convert between 32 different currencies. Exchange rates updated daily.",
                'href': "http://currency.vincentwong.me",
                'img': "public/img/projects/CurrencyConverterMIN.jpg"
            },
            {
                'name': "Tamaki Roulette",
                'description': "Randomly pick an option from a list of choices.",
                'href': "https://tamakiroulette.herokuapp.com/",
                'img': "public/img/projects/TamakiRouletteMIN.jpg"
            },
            {
                'name': "Fruit Finder",
                'description': "Display the locations of local community gardens and fruit trees in Vancouver.",
                'href': "https://gory-coffin-2047.herokuapp.com/",
                'img': "public/img/projects/FruitFinderMIN.jpg"
            },
            {
                'name': "Music Store",
                'description': "Shop from a fake online music store.",
                'href': "http://musicshop.azurewebsites.net/",
                'img': "public/img/projects/MusicStoreMIN.jpg"
            }
        ];

        $scope.instagramPics = [
            {
                "href": "https://www.instagram.com/p/-zawaiKW5F/",
                "img": "https://instagram.com/p/-zawaiKW5F/media/?size=m",
                "text": "Capilano Canyon"
            },
            {
                "href": "https://www.instagram.com/p/BJoqzYxAXsu/",
                "img": "https://instagram.com/p/BJoqzYxAXsu/media/?size=m",
                "text": "Lower Joffre Lake"
            },
            {
                "href": "https://www.instagram.com/p/-zaPxzqW4J/",
                "img": "https://instagram.com/p/-zaPxzqW4J/media/?size=m",
                "text": "Inukshuk - Mt. Seymour"
            },
            {
                "href": "https://www.instagram.com/p/9ZqS6QKW6W/",
                "img": "https://instagram.com/p/9ZqS6QKW6W/media/?size=m",
                "text": "Platy and Cardinal Tetras"
            },
            {
                "href": "https://www.instagram.com/p/BJoroljA1dH/",
                "img": "https://instagram.com/p/BJoroljA1dH/media/?size=m",
                "text": "Middle Joffre Lake"
            }
        ];
    }]);