define([ 'services' ], function(services) {
	services.factory('rootService', [ '$resource', '$http',
			function( $resource, $http) {
				var sc = {};
				
				sc.query = function() {
					return $http.get('/');
				};
				return sc;
			} ])
})