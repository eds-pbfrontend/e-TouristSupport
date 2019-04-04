var app = angular.module('myApp', ['ngRoute']);

app.value('apiBase', 'http://localhost:9838/api/hospitais/');

app.config(['$logProvider', '$routeProvider', '$locationProvider', function ($logProvider, $routeProvider, $locationProvider) {

    $logProvider.debugEnabled(true);

    $routeProvider
        .when('/', {
            template: '<home></home>',
        })
        .when('/hospitais', {
            template: '<hospital></hospital>',
        })
        .when('/arenas', {
            template: '<arena></arena>',
        })
        .when('/login', {
            template: '<login></login>',
        })
        .when('/register', {
            template: '<register></register>',
        })
        .when('/error', {
            templateUrl: 'templates/error.html',
        })
        .otherwise({redirectTo: '/'});

}]);