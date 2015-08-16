define(['angular'], function(angular){
	'use strict';
	var controllers = angular.module('controllers', []);
	controllers.controller('RootCtrl', [ '$scope', function($scope) {
		$scope.username = 'World';

		$scope.sayHello = function() {
			$scope.greeting = 'Hello ' + $scope.username + '!';
		};
	} ]);
	return controllers;
})
