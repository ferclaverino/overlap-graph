'use strict';

/* Controllers */

var overlapGraphControllers = angular.module('overlapGraphControllers', []);

overlapGraphControllers.controller('OverlapGraphCtrl', ['$scope', 'overlapGraphBuilder', function OverlapGraphCtrl($scope, overlapGraphBuilder) {
  $scope.chains = [];
  $scope.newChain = { name: "", sequence: "" };
  $scope.graph = [];
  
  $scope.addChain = function (chainName, chainSequence) {
    if (chainName && chainSequence) {
      $scope.newChain.name = "";
      $scope.newChain.sequence = "";
      $scope.chains.push({name: chainName, sequence: chainSequence});
    }
  };
  
  $scope.buildGraph = function (chains) {
    $scope.graph = overlapGraphBuilder.build(chains);
  };
}]);

