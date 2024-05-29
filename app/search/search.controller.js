(function() {

'use strict';

angular.module('lase.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl',
    controllerAs: 'ctrl'
  });
}])

.controller('SearchCtrl', ['serverapi', function($serverapi) {

  var vm = this;

  vm.form = {};
  vm.results = null;

  vm.search = function() {
    $serverapi.sendSearchRequest(vm.form)
      .then(function(resp) {
        if (!resp.data.errors) {
          vm.results = resp.data.data;
        }
      });
  };

}]);

}());
