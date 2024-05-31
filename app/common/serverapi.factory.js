angular.module('lase.common.serverapi', [])

.factory('serverapi', ['$http', function ($http) {

  var service = {};

  // URL of a LASE instance
  service.serverBaseUrl = 'http://localhost:5000/api';

  service.sendSearchRequest = function(data) {
      return $http.get(service.serverBaseUrl + '/search', {params: data});
  };


  return service;
}]);
