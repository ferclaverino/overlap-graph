'use strict';

/* Controllers */

var overlapGraph = angular.module('overlapGraph', []);

overlapGraph.controller('OverlapGraphCtrl', function OverlapGraphCtrl($scope) {
  $scope.chains = [];

  $scope.addChain = function (chainName, chainSequence) {
    $scope.chainName = "";
    $scope.chainSequence = "";
    $scope.chains.push({name: chainName, sequence: chainSequence});
  };
});
