var app = angular.module('app')

    .controller('HomeController', ['$scope', function ($scope) {
        $scope.projects = [
            {
                'name': "Hiking Vancouver",
                'description': "Mobile (hybrid) Android application that displays hiking trails around Vancouver, Canada",
                'href': "http://hike.vincentwong.me",
                'img': "public/img/projects/HikingVancouver.jpg"
            },
            {
                'name': "Tamaki Roulette",
                'description': "Randomly pick an option from a list of choices.",
                'href': "https://tamakiroulette.herokuapp.com/",
                'img': "public/img/projects/TamakiRoulette.jpg"
            },
            {
                'name': "Fruit Finder",
                'description': "Display the locations of local community gardens and fruit trees in Vancouver.",
                'href': "https://gory-coffin-2047.herokuapp.com/",
                'img': "public/img/projects/FruitFinder.jpg"
            },
            {
                'name': "Music Store",
                'description': "Shop from a fake online music store.",
                'href': "http://musicshop.azurewebsites.net/",
                'img': "public/img/projects/MusicStore.jpg"
            },
            /*{
             'name': "TypeRacer",
             'description': "Find out how fast you can type!",
             'href': "https://pusheenracer.herokuapp.com/",
             'img': ''
             },*/
            /*{
             'name': "Music Store Shopping App",
             'description': "Display an online product catalogue for a simulated music store and simulated purchases." +
             "(Tools: PHP, AngularJS, MySQL)",
             'href': "",
             'img': ''
             }*/

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

        $scope.workExperience = [
            {
                "position" : "Software Developer Intern",
                "company" : "SAP Canada Inc.",
                "location" : "Vancouver, BC",
                "date" : "January 2016 - Present",
                "details" : []
            },
            {
                "position" : "Software Developer Co-op",
                "company" : "Ingenium Technologies Corp.",
                "location" : "Vancouver, BC",
                "date" : "January 2015 - August 2015",
                "details" : [
                    "Maintained and contributed to developing features for an enterprise web application by utilizing the AngularJS framework for front-end development and C# (ASP.NET MVC framework) for back-end development.",
                    "Worked extensively on a hybrid mobile web application built on Ionic Framework.",
                    "Implemented major user account and site management features to a site management application."
                ]
            }
        ];
    }]);