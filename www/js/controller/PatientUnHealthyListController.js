define(function(require){
	return function($scope,PatientsService){
		var userId = '1';
		$scope.unHealthyForm = {
			hasMorse:false,
			hasBraden:false,
			hasSenyao:false,
			hasJiyaomistake:false,
			hasBaguan:false,
			hasZisha:false,
			hasZoushi:false,
			hasXueshuan:false,
			hasShuxue:false,
			hasSkinsunshang:false,
			hasPiyan:false,
			hasZhuanyunywai:false,
			hasZhencishang:false,
			hasXuetang:false,

		};
		$scope.selectedGrade='';
		$scope.fillUnhealthyForm = function(patient){
			$scope.currentPatient = patient;
			getAccidentList(patient.patientId);
		}
		$scope.submitUnhealthyForm = function(form){
			var i=0;
			for(var key in form){
				i++;
				//console.log(form[key]);
				if(form[key] === true){
					console.log(true);
					form[key] = 1;
				}
				else if(form[key] === false){
					console.log(false);
					form[key] = 0;
				}
			}
			console.log(i,form);
			//if(i==28){
			form.patientId = $scope.currentPatient.patientId;
			console.log(form);
			PatientsService.submitUnhealthyForm(form,function(status){
				console.log('save status:',status);
			});	
		/*}else{
			console.log('Not enough data');
		}*/
			//$scope.unHealthyForm =form;
		}
		/*$scope.patients = [
							{"isOdd":true,"angstTotal":1,"bradenTotal":2,"department":"内科","dvttotal":3,"goolmyTotal":4,"id":1,"morseTotal":5,"nrstotal":6,"patientBedNum":101,"patientId":1,"patientName":"黄晓明","reportTime":1446996344000},
							{"isOdd":false,"angstTotal":1,"bradenTotal":2,"department":"内科","dvttotal":3,"goolmyTotal":4,"id":2,"morseTotal":5,"nrstotal":6,"patientBedNum":102,"patientId":2,"patientName":"谢霆锋","reportTime":1446996364000},
							{"isOdd":true,"angstTotal":1,"bradenTotal":2,"department":"内科","dvttotal":3,"goolmyTotal":4,"id":3,"morseTotal":5,"nrstotal":6,"patientBedNum":103,"patientId":3,"patientName":"刘亦菲","reportTime":1446996375000}
						];
		*/PatientsService.getInPatientList(userId,function(data){
			$scope.currentPatient=data[0];
			$scope.patients =data;
			getAccidentList(data[0].patientId);
		},function(error){
			console.log(error);
		});	
				
		var getAccidentList = function(patientId){
			PatientsService.getAccidentList(patientId,function(data){
			if(data =='' ){
				$scope.newFormNotice = ' - 新增登记';
			}
			for(var key in data){
				if(key.indexOf('has')===0){
					if(data[key] === 0){
						data[key]=false;
					}else{
						data[key]=true;
					}
				}
			$scope.unHealthyForm[key] = data[key];	
			}
			//$scope.unHealthyForm=data;
		},function(error){
			console.log(error);
		});	
		};	


		//$scope.currentPatient = $scope.patients[0];				

	}
});
