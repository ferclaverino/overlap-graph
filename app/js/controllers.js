'use strict';

/* Controllers */

var overlapGraphControllers = angular.module('overlapGraphControllers', []);

overlapGraphControllers.controller('OverlapGraphCtrl', function OverlapGraphCtrl($scope) {
  $scope.chains = [];
  $scope.newChain = { name: "", sequence: "" };

  $scope.addChain = function (chainName, chainSequence) {
    if (chainName && chainSequence) {
      $scope.newChain.name = "";
      $scope.newChain.sequence = "";
      $scope.chains.push({name: chainName, sequence: chainSequence});
    }
  };
});
