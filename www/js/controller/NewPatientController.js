define(function(){
	return function($scope,$ionicPopup){
		$scope.patient={};
		$scope.add=function(){
			console.log($scope.patient);
			var alertPopup = $ionicPopup.alert({
                                   title: '',
                                   template: "<h4 style='text-align: center;'>提交成功</h4>"
                                 });
			
		}
	}


});