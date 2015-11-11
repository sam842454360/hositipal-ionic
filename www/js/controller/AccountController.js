define(function(){
return function ($scope,$ionicSideMenuDelegate) {
        $scope.settings = {
            enableAccount: false,
            resetPassword: true
        };
         $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
    }
});