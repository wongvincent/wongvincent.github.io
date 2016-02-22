var app = angular.module('app');

app.controller("ResumeController", ["$scope", function($scope){
    $scope.skills = [
        "C#",
        "Java",
        "AngularJS",
        "JavaScript/jQuery",
        "Version Control (Git, Mercurial)",
        "Databases (MySQL, SQLite, MongoDB)",
        "Agile Methodology",
        "Ionic Framework",
        "HTML5/CSS3",
        "SCSS/LESS"
    ]

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
    ]
}]);