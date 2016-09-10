var app = angular.module('app')

    .controller('HomeController', ['$scope', function ($scope) {
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