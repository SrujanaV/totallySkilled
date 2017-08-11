// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'angular-flexslider',
    'angularPromiseButtons',
    'toastr',
    'angular-flexslider',
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('module', {
            url: "/module",
            templateUrl: tempateURL,
            controller: 'moduleCtrl'
        })
        .state('module-detail', {
            url: "/module-detail",
            templateUrl: tempateURL,
            controller: 'moduleDetailCtrl'
        })
         .state('module-test', {
            url: "/module-test",
            templateUrl: tempateURL,
            controller: 'moduleTestCtrl'
        })
         .state('module-score', {
            url: "/module-score",
            templateUrl: tempateURL,
            controller: 'moduleScoreCtrl'
        })
         .state('account', {
            url: "/account",
            templateUrl: tempateURL,
            controller: 'AccountCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })
        .state('grid', {
            url: "/grid",
            templateUrl: tempateURL,
            controller: 'GridCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});