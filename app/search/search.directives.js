(function() {

'use strict';

angular.module('lase.search.directives', [])

.directive('resultItem', function() {

  var directive = {};

  directive.restrict = 'E';
  directive.scope = {
    item: '='
  };
  directive.templateUrl = 'search/result-item.html';

  return directive;
})

.directive('searchForm', function() {
  var directive = {};

  directive.scope = true;
  directive.restrict = 'E';
  directive.replace = true;

  directive.templateUrl = 'search/search-form.html';

  directive.controller = function($scope) {
    $scope.pos = {
      'padding-top': '35vh',
    };

    $scope.toTheTop = function() {
      // calculate however you'd like:
      $scope.pos['padding-top'] = '10px';
      $scope.pos['background-color'] = 'rgba(54, 25, 25, .2)';
      return true;
    };
  };

  return directive;
});

}());
