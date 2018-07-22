var app = angular.module('myApp', ['ngMaterial', 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('dashboard', {
			url: "/dashboard",
			templateUrl: 'partials/dashboard.html',
			controller: "DashboardController"
		})
		.state('uploadFile', {
			url: "/uploadFile",
			templateUrl: 'partials/UploadFileUtil/uploadFile.html',
			controller: "UploadController"
		})
		.state('uploadResult', {
			url: '/uploadResult',
			templateUrl: 'partials/uploadResult/uploadResult.html',
			controller: "ResultController"
		})


	$urlRouterProvider.otherwise('dashboard');


});
