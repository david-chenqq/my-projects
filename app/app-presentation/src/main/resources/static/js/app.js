define(['angular'], function(angular) {

	var app =  angular.module('app',[]);

	app.run(function() {
		console.log('Yahoo!');
	});
	
	app.config(function(){
		console.log('config!');
	});

//	alert("haha");
	return app;
});