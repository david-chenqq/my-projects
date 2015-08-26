require.config({
	baseUrl : '',
	paths : {
		app: 'js/app',
		angular : 'js/lib/angular/angular.min',
		ngRoute : 'js/lib/angular/angular-route.min',
		ngResource: 'js/lib/angular/angular-resource.min',
		controllers: 'js/controller/controllers',
		services: 'js/service/services'
	},
	shim : {
		angular : { 'exports' : 'angular' },
		ngRoute: {deps:['angular']},
		ngResource: {deps:['angular']},
		services: {deps:['ngResource']},
		controllers: {deps:['ngRoute','services']}
	}
});

require(['app', 
         'angular'
         ], function(app) {
	angular.bootstrap(document, ['app']);
});
