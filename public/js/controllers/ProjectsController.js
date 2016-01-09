var app = angular.module('app');

app.controller('ProjectsController', ['$scope', function($scope){
    var projects = [
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