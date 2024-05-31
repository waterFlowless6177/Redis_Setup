angular.module('lase', [
    'ngRoute',
    'lase.search',
    'lase.search.directives',
    'lase.common.serverapi'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/search'});
}]);
