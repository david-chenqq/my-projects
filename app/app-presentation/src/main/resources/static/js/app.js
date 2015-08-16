"use strict";

define(['angular','ngRoute', 'rootController'], function(angular) {

	var app =  angular.module('app',['ngRoute', 'controllers']);

	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{
			templateUrl: "template/root.html",
			controller: "RootCtrl"
		})
	}]);

	return app;
});