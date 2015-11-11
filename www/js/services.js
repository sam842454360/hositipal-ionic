define([
  'angular',
  'require',
  'service/PatientsService'], function(angular,require,PatientsService) {
angular.module('starter.services', [])
.service('PatientsService',['$http',PatientsService]);
});
