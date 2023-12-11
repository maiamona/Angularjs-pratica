angular.module("meuMulo", ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
    .when('/home', {
      templateUrl: 'templates/home.html',
      controller: 'indexController' 
    }) 
    .when('/contacto', {
        templateUrl: 'templates/contacto.html',
        controller: 'contactoController'
      });

      $routeProvider.otherwise({
        redirectTo: '/home',
        
    });
     
})