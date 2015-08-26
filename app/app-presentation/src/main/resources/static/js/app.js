"use strict";

define([
        'angular',
        'controllers',
        'js/controller/rootController',
        'js/service/rootService'
        ], function(angular) {

	var app =  angular.module('app',['ngRoute', 'ngResource', 'controllers', 'services']);

	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{
			templateUrl: "template/root.html",
			controller: "RootCtrl"
		})
	}]);

	return app;
});