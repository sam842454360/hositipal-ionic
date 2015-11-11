define(function(require){

    //var menu = require('/templates/patient-control-menu.html');

    var loadingSuccessPopup = "<h4 style='text-align: center;'>刷新成功</h4>"; 
    var getDate = function(){
      var date = new Date();
     return date.getFullYear() +'年' +date.getMonth() +'月' +date.getDate()+'日';
    }


    return function ($scope, $http,PatientsService,$ionicListDelegate,$ionicPopup,$ionicLoading) {
          var getPatientsSuccess = function(patients){
                                       $scope.patients = patients;
                                       $ionicLoading.hide();
                                    };
          var getPatientsError = function(error){
              $ionicPopup.alert({
                                   title: '数据加载失败!',
                                   template: '原因:'+error
                                 });
          }                          
          $ionicLoading.show({
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
              });
          setTimeout(function(){
              PatientsService.getPatients('1234',getPatientsSuccess,getPatientsError);
          },2000);
             $scope.toggleLeft = function() {
                $ionicSideMenuDelegate.toggleLeft();
              };
           $scope.save = function(patient){
            PatientsService.savePatient(patient);
            setTimeout(function(){
                patient.saveSuccess = true;
            $ionicListDelegate.closeOptionButtons();
            $scope.$digest();
            setTimeout(function(){
                patient.saveSuccess = false;
                 $scope.$digest();
            },2000);
            },500);
            console.log(patient);
           } 

           $scope.delete = function(patient){
               var confirmPopup = $ionicPopup.confirm({
               title: '注意',
               template: '你确定要删除病人'+ patient.patientName+'的记录吗?'
             });
             confirmPopup.then(function(res) {
                $ionicListDelegate.closeOptionButtons();
               if(res) {
                 console.log('You are sure');
               } else {
                 console.log('You are not sure');
               }
             });
           }



           $scope.doRefresh = function(){
            if(!$scope.isLoading){
            $scope.isLoading = true;
              setTimeout(function(){
                   $scope.patients.push({
                            id: 0,
                            name: '大波妹',
                            lastText: '科室:脑神经科',
                            doctor:'登记号:332',
                            bedNum:'床号:204',
                            face: '../img/patient.jpg',
                            saveSuccess:false
                          });
                   $scope.$broadcast('scroll.refreshComplete');  
                      var alertPopup = $ionicPopup.alert({
                                   title: '',
                                   template: loadingSuccessPopup
                                 });
                               /*  alertPopup.then(function(res) {
                                   console.log('Thank you for not eating my delicious ice cream cone');
                                 });*/
                    $scope.isLoading = false;             
                },3000);  
            } 
           }




        var url = 'http://localhost:1337/192.168.0.100:8080/SHModel/action/save';
        url = 'http://localhost:1337/192.168.0.100:8080/SHModel/action/vaidUser';
        /**
        * Setup scope
        */
        $scope.currentDate = getDate();
  /*  $http({
        method:'GET',
        url:url,
        params:{
            //userid
            userId :'yangy',
            password: 123
            }
    }).success(function(data, status, headers, config) {            
        console.log('success data',data);  
        })
        .error(function(data, status, headers, config) {
        console.log("error ",data);
        });*/
       
    }
})