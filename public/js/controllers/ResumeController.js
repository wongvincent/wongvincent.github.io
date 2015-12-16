var app = angular.module('app');

app.controller("ResumeController", ["$scope", function($scope){
    var withExperienceString = "C#;" +
        "Java;" +
        "AngularJS;" +
        "JavaScript/jQuery;" +
        "Version Control (Git, Mercurial);" +
        "Databases (MySQL, SQLite, MongoDB);" +
        "Agile Methodology;" +
        "HTML5/CSS3;" +
        "SCSS/LESS";

    $scope.withExperience = withExperienceString.split(';');
    console.log($scope.withExperience);
}]);