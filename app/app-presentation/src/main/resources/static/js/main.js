require.config({
	baseUrl : '',
	paths : {
		app: 'js/app',
		angular : 'js/lib/angular/angular.min',
		ngRoute : 'js/lib/angular/angular-route.min',
		rootController: 'js/controller/rootController'	
	},
	shim : {
		angular : { 'exports' : 'angular' },
		angularRoute: {deps:['angular']}
	}
});

require(['app', 
         'angular'
         ], function(app) {
	angular.bootstrap(document, ['app']);
});
