define([
    'require',
    'angular',
    'controller/AccountController',
    'controller/PatientDetailController',
    'controller/PatientListController',
    'controller/DashController',
    'controller/PatientSubDetailController',
    'controller/PatientUnHealthyListController'
    ], function(require,angular,AccountCtrl,PatientDetailCtrl,PatientListCtrl,DashController,PatientSubDetailCtrl,PatientUnHealthyListCtrl){
    angular.module('starter.controllers', [])
    .config(['$compileProvider',function($compileProvider){
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|itms-services):/);
    }])
    .controller('DashCtrl', DashController)
    .controller('PatientListCtrl', ['$scope','$http','PatientsService','$ionicListDelegate','$ionicPopup','$ionicLoading',PatientListCtrl])
    .controller('PatientDetailCtrl', ['$scope','$http','$stateParams', 'Chats', '$ionicPopup','$state',PatientDetailCtrl])
    .controller('AccountCtrl', ['$scope','$ionicSideMenuDelegate',AccountCtrl])
    .controller('PatientSubDetailCtrl',['$scope','$state', PatientSubDetailCtrl])
    .controller('PatientUnHealthyListController',['$scope', PatientUnHealthyListCtrl])
});
