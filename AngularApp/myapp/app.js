angular.module('app', []).controller('MainCtrl', function MainCtrl($scope) {
  $scope.options = ['px', '%', 'rem', 'auto'];
  $scope.value = '10px';
});