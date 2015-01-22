angular.module('acompanysite')
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('app', {
        url: '/',
        templateUrl: 'templates/app.html'
    })
})
