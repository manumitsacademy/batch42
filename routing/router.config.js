h.config(function($routeProvider) {
				$routeProvider.
				when("/",{
					templateUrl:"sachin.html"
				}).
				when("/sachin",{
					templateUrl:"sachin.html"
				}).
				when("/dravid",{
					templateUrl:"dravid.html"
				}).
				when("/newroute",{
					templateUrl:"old/red.html"
				}).
				when("/ganguly",{
					templateUrl:"ganguly.html"
				});				
			});