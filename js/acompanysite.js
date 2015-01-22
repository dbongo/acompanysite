'use strict';

(function() {

    angular.module('acompanysite', ['ui.router', 'ui.bootstrap'])

})();

angular.module('acompanysite')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('app', {
        url: '/',
        templateUrl: 'templates/app.html'
    })
}])

angular.module('acompanysite')
.controller('MainCtrl', function MainCtrl() {
    this.welcome = 'Welcome to ACompanySite!'
    this.heading = 'It\'s Nice To Meet You :)'
    this.please = 'Please, show me more'
})
