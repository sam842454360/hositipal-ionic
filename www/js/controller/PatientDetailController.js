define(function(){
	return function ($scope,$http, $stateParams, Chats, $ionicPopup,$state) {
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
        $scope.showSubDetail_1 = function(parm){
            $state.go("tab.detail1");
        };
        $scope.showSubDetail_2 = function(parm){
            $state.go("tab.detail2");
        };
        $scope.showSubDetail_3 = function(parm){
            $state.go("tab.detail3");
        };

console.log(1);
    var url = "http://192.168.0.102:8080/TestServer/DataServicePort?wsdl/getAllDataPatient" ;
             /*$http.get(url).success( function (data) {
                 var myjson = JSON.parse(data);
                 //$scope.users = ;
                 console.log(JSON.parse(myjson));    
                });*/
      /*       $http.jsonp(url).success(
        function(data, status, header, config){
           console.log(data);
        }
    )
    .error(
        function(error){
            console.log("error",error);
        });
    $.getJSON(url,function(data){
        console.log(data);
    });*/
                /*$http({  
            method: 'POST',  
            url: 'http://192.168.0.102:8080/TestServer/DataServicePort?wsdl',
            headers: {
                 "Content-Type": "application/json"
             }
         }).success(function(data,status,headers,config){  
              
         }).error(function(data,status,headers,config){  
             console.log(data); 
         });*/
    var url = 'http://localhost:1337/localhost:3000/refresh'; 
    url = 'http://localhost:1337/localhost:9000/Service/PatientService/getAllPatients';
    $scope.refresh = function(){
    
      /*  $http.get(url)
        .success(function(data, status, headers, config) {      
        console.log('success status',status);        
        console.log('success data',data);  
        console.log('success headers',headers);  
        console.log('success config',config);  
        })
        .error(function(data, status, headers, config) {
        console.log("error ",data);

        });*/
    }
    }
})