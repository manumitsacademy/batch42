			h.controller("arthCtrl",function($scope,ArthServices){
				$scope.aa = function(){
					$scope.sum=ArthServices.add($scope.fn,$scope.sn);
				}				
			});