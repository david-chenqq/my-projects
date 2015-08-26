define(['controllers'], function(controllers){
	'use strict';
	controllers.controller('RootCtrl', [ '$scope', '$http', 'rootService', 
	                                     function($scope, $http, rootService) {
		$scope.username = 'World';

		$scope.sayHello = function() {
			rootService.query().success(function (response) {
				$scope.greeting  = response.name + ", you are " + response.age + " years old.";
				$scope.username = response.name;
            })
			
			// $scope.greeting = 'Hello ' + $scope.username + '!';
		};
	} ]);
	return controllers;
})
