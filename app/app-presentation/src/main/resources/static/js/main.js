require.config({
	baseUrl : 'js/lib',
	paths : {
		app: '../app',
		angular : './angular/angular.min',
		angularRoute : './angular/angular-route.min'
	},
	shim : {
		angular : { 'exports' : 'angular' },
		angularRoute: {deps:['angular']}
	}
});

require(['app', 'angular'], function(app) {
	angular.bootstrap(document, ['app']);
});
