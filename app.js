var app = angular.module("quizApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	$stateProvider
	.state("home", {
		url: "/",
		templateUrl: "components/home/homeView.html",
		controller: "homeCtrl"
	})
})