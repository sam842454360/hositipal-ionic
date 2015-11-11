requirejs.config({
  baseUrl: 'js/',
  paths: {
    app: 'app',
    angular: '/lib/angular/angular',
    'starter.controllers': 'controllers',
    'starter.services': 'services',  
  },
  shim: {
  	angular : { exports : 'angular'}
  }
});
requirejs(['app']);