var app = angular.module('toDoApp', ['ui.sortable', 'ui.router']);

/*
 .config([
 '$stateProvider',
 '$urlRouterProvider',
 function($stateProvider, $urlRouterProvider) {

 $stateProvider
 .state('home', {
 url: '/home',
 templateUrl: '/home.html',
 controller: 'UserController'
 });

 $urlRouterProvider.otherwise('home');
 }]);*/


app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {


    $urlRouterProvider
    //any url that doesn't exist in routes redirect to '/'
        .otherwise('/user/dashboard');

    $stateProvider
        .state({
            name: 'dashboard',
            url: '/user/dashboard',
            templateUrl: '/user/dashboard.html',
            controller: 'DashboardController'
        })
        .state({
            name: 'login1',
            url: '/user/login1',
            templateUrl: '/user/login1.html',
            controller: 'LoginController'
        });
}).run(function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        if ($rootScope.loggedInEmail == null) {
            // no logged user, redirect to /login
            if ( next.templateUrl === "/user/login1.html") {
            } else {
                $location.path("/user/login1");
            }
        } else{
            $location.path("/user/dashboard");
        }
    });
});
