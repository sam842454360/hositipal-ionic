define(function(require){
	return function($scope){
		$scope.name = 'Sam';
		$scope.fillUnhealthyForm = function(patient){
			console.log(patient);
			$scope.name = patient.patientName;
			patient.patientClick ='save-button';
		}
		$scope.patients = [
							{"angstTotal":1,"bradenTotal":2,"department":"内科","dvttotal":3,"goolmyTotal":4,"id":1,"morseTotal":5,"nrstotal":6,"patientBedNum":101,"patientId":1,"patientName":"黄晓明","reportTime":1446996344000},
							{"angstTotal":1,"bradenTotal":2,"department":"内科","dvttotal":3,"goolmyTotal":4,"id":2,"morseTotal":5,"nrstotal":6,"patientBedNum":102,"patientId":2,"patientName":"谢霆锋","reportTime":1446996364000},
							{"angstTotal":1,"bradenTotal":2,"department":"内科","dvttotal":3,"goolmyTotal":4,"id":3,"morseTotal":5,"nrstotal":6,"patientBedNum":103,"patientId":3,"patientName":"刘亦菲","reportTime":1446996375000}
						];

	}
});
