define(function(){
	return function ($scope) {
        $scope.ifClose_A = true;
        $scope.ifClose_B = true;
        $scope.ifClose_C = true;
        $scope.closeBox = function (option) {
            switch (option) {
                case 1:
                    $scope.ifClose_A = false;
                    break;
                case 2:
                    $scope.ifClose_B = false;
                    break;
                case 3:
                    $scope.ifClose_C = false;
            }
        }
    }
})