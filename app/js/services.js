var overlapGraphServices = angular.module('overlapGraphServices', []);

overlapGraphServices.factory('overlapGraphBuilder', function() {
  return {
    build: function(chains) {
      var prefixIndex = {};
      var sufixIndex = {};
      for (var i = 0; i < chains.length; i++) {
        var chain = chains[i];
        var prefix = chain.sequence.substring(0, 4);
        var sufix = chain.sequence.substring(chain.sequence.length - 4, chain.sequence.length);

        prefixIndex[prefix] = { chain: chain, sufix : sufix };
        sufixIndex[sufix] = { chain: chain, prefix : prefix };
      }

      var graph = [];
      for (sufix in sufixIndex) {
        if (prefixIndex.hasOwnProperty(sufix)) {
          var nodeFrom = sufixIndex[sufix];
          var nodeTo = prefixIndex[sufix];
          graph.push({
            from: nodeFrom.chain.name,
            to: nodeTo.chain.name,
          })
        }
      }

      return graph;
    }
  };
});