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

        $scope.projects = [
            {
                'name': "Hiking Trails Mobile App",
                'description': "Mobile optimized (hybrid) application that displays hiking trails around Vancouver, Canada" +
                "(Tools: AngularJS, Ionic Framework, SQLite)",
                'url': "",
                'image': ''
            },
            {
                'name': "Fruit Finder",
                'description': "A web application that utilizes a public data set provided by the City of Vancouver to display the locations of community gardens and fruit trees in map and tabular form." +
                "(Tools: Express(Node.js), MongoDB)",
                'url': "https://gory-coffin-2047.herokuapp.com/",
                'image': ''
            },
            {
                'name': "Music Store Shopping App",
                'description': "Display an online product catalogue for a simulated music store and simulated purchases." +
                "(Tools: PHP, AngularJS, MySQL)",
                'url': "",
                'image': ''
            }
        ];
    }]);