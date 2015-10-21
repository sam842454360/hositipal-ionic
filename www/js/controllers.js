angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
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
    })
    .controller('ChatsCtrl', function ($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', ['$scope', '$stateParams', 'Chats', '$ionicPopup','$state',function ($scope, $stateParams, Chats, $ionicPopup,$state) {
        $scope.chat = Chats.get($stateParams.chatId);
        $scope.showAlert = function () {
            var alertPopup = $ionicPopup.alert({
                title: '表单已录入',
                template: '你已录入成功!'
            });
            alertPopup.then(function (res) {
                //UrlRouterProvider.otherwise('/tab/chats');
                $state.go("tab.chats");
            });
        };
    }])

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
