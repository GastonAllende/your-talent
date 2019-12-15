var app = angular.module("lfQuiz", ["ngRoute", "chart.js"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/quiz", {
        templateUrl: "../views/spela.html",
        controller: "QuizController"
      })
      .when("/diagram/:param", {
        templateUrl: "../views/spindeldiagram.html",
        controller: "DiagramController"
      })
      .otherwise({
        templateUrl: "../views/start.html",
        redirectTo: "/"
      });
  }
]);


