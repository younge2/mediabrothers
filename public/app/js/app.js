var mediaApp = angular.module('mediaApp', ['MediaCtrl','ui.bootstrap', 'ui.router', 'angular-flippy']);

mediaApp.config([
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider){

		$urlRouterProvider.otherwise('/404');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/views/home.html'
		})
		.state('404', {
			url: '/404',
			templateUrl: 'app/views/404.html'
		})

		$locationProvider.html5Mode(true);
	}

]);