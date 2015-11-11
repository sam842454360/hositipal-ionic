define(function(require){
	return function($http){
		return {
			savePatient : function(patient){			            
			            console.log('Save success:',patient);
			        },
			getPatients :function(userID,successCallback,errorCallback){
					/*successCallback([
								     {"face":"../img/patient.jpg","angstTotal":1,"bradenTotal":2,"department":"内科","dvttotal":3,"goolmyTotal":4,"id":1,"morseTotal":5,"nrstotal":6,"patientBedNum":101,"patientId":1,"patientName":"黄晓明","reportTime":1446996344000},
								     {"face":"../img/patient1.jpg","angstTotal":1,"bradenTotal":2,"department":"内科","dvttotal":3,"goolmyTotal":4,"id":2,"morseTotal":5,"nrstotal":6,"patientBedNum":102,"patientId":2,"patientName":"谢霆锋","reportTime":1446996364000},
								     {"face":"../img/patient2.jpg","angstTotal":1,"bradenTotal":2,"department":"内科","dvttotal":3,"goolmyTotal":4,"id":3,"morseTotal":5,"nrstotal":6,"patientBedNum":103,"patientId":3,"patientName":"刘亦菲","reportTime":1446996375000}
								   ]);*/
			//var url = 'http://localhost:1337/192.168.0.100:8080/SHModel/action/save';
			  $http({
			        method:'GET',
			        url:'http://localhost:1337/localhost:8080/SHModel/action/getAllPatient',
			        params:{
			            userId :userID
			            }
					    }).success(function(data, status, headers, config) {            
					        console.log('success data',data);
					        successCallback(data);  
					        })
					        .error(function(data, status, headers, config) {
					        console.log("error ",data);
					        errorCallback(data);
					        });
						}      					           
		}
	}
});