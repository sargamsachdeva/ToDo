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


app.config(function ($stateProvider) {


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
});
