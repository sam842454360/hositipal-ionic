define(function(require){
	var serverUrl = 'http://localhost:1337/localhost:8080/SHModel/action/';
	return function($http){
		return {
			savePatient : function(patient,successCallback,errorCallback){			            
			            console.log('Save success:',patient);
			         $http({
			        method:'GET',
			        url:serverUrl+'saveReport',
			        params:{
			        	vr:patient
			        }
					    }).success(function(data, status, headers, config) {            
					        console.log('success data',data);
					        //console.log(data);  
					        })
					        .error(function(data, status, headers, config) {
					        console.log("error ",data);
					        //console.log(data);
					        });
			        },
			getPatients :function(userID,successCallback,errorCallback){
					successCallback([
								     {"face":"../img/patient.jpg","angstTotal":51,"bradenTotal":32,"department":"内科","dvttotal":83,"goolmyTotal":44,"id":1,"morseTotal":54,"nrstotal":67,"patientBedNum":101,"patientId":1,"patientName":"黄晓明","reportTime":1446996344000},
								     {"face":"../img/patient1.jpg","angstTotal":71,"bradenTotal":72,"department":"外科","dvttotal":39,"goolmyTotal":45,"id":2,"morseTotal":55,"nrstotal":86,"patientBedNum":102,"patientId":2,"patientName":"谢霆锋","reportTime":1446996364000},
								     {"face":"../img/patient2.jpg","angstTotal":78,"bradenTotal":29,"department":"烧伤科","dvttotal":63,"goolmyTotal":46,"id":3,"morseTotal":56,"nrstotal":76,"patientBedNum":103,"patientId":3,"patientName":"刘亦菲","reportTime":1446996375000}
								   ]);
			/*	$http({
			        method:'GET',
			        url:serverUrl+'getTodayList',
			        params:{
			            Userid :userID
			            }
					    }).success(function(data, status, headers, config) {            
					        console.log('success data',data);
					        successCallback(data);  
					        })
					        .error(function(data, status, headers, config) {
					        console.log("error ",data);
					        errorCallback(data);
					        });*/
				},
			getInPatientList : function(userID,successCallback,errorCallback){
				$http({
			        method:'GET',
			        url:serverUrl+'getInPatientList',
			        params:{
			            Userid :userID
			            }
					    }).success(function(data, status, headers, config) {            
					        console.log('success data getInPatientList',data);
					        successCallback(data);  
					        })
					        .error(function(data, status, headers, config) {
					        console.log("error ",data);
					  
					        });
			},
			getAccidentList :function(patientID,successCallback){
				$http({
			        method:'GET',
			        url:serverUrl+'getAccidentList',
			        params:{
			             PatientID:patientID
			            }
					    }).success(function(data, status, headers, config) {            
					        console.log('success data getAccidentList ',data);
							successCallback(data);  
					        })
					        .error(function(data, status, headers, config) {
					        console.log("error ",data);
					  
					        });
			},
			submitUnhealthyForm :function(form,successCallback){
				$http({
			        method:'GET',
			        url:serverUrl+'saveAccident',
			        params:{
			             str:form
			            }
					    }).success(function(data, status, headers, config) {            
							successCallback(data);  
					        })
					        .error(function(data, status, headers, config) {
					        console.log("error ",data);
					  
					        });
			}		

				/*, 
			getInPatientList : function(userID, successCallback，errorCallback){
				$http({
			        method:'GET',
			        url:serverUrl+'getInPatientList',
			        params:{
			            Userid :userID
			            }
					    }).success(function(data, status, headers, config) {            
					        console.log('success data',data);
					        successCallback(data);  
					        })
					        .error(function(data, status, headers, config) {
					        console.log("error ",data);
					        errorCallback(data);
					        });
			}	*/	
			//var url = 'http://localhost:1337/192.168.0.100:8080/SHModel/action/save';
			/*  $http({
			        method:'GET',
			        url:serverUrl+'getTodayList',
			        params:{
			            Userid :userID
			            }
					    }).success(function(data, status, headers, config) {            
					        console.log('success data',data);
					        successCallback(data);  
					        })
					        .error(function(data, status, headers, config) {
					        console.log("error ",data);
					        errorCallback(data);
					        });*/
			     					           
		}
	}
});