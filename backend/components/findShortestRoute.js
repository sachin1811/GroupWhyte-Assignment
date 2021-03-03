var ShortestTrainRoute = require('./TrainRouteShortest.js'); 

let findShortestRoute = (graph, startNode, endNode) => {
 
    let distances = {};
  distances[endNode] = "Infinity";
  distances = Object.assign(distances, graph[startNode]);
  let parents = { endNode: null };
  for (let child in graph[startNode]) {
   parents[child] = startNode;
  }
   
    let visited = [];
   let node = ShortestTrainRoute(distances, visited);
  
  while (node) {
   let distance = distances[node];
   let children = graph[node]; 
       
      for (let child in children) {
   
        if (String(child) === String(startNode)) {
           continue;
        } else {
           let newdistance = distance + children[child];
          if (!distances[child] || distances[child] > newdistance) {
      distances[child] = newdistance;
      parents[child] = node;
     } 
          }
        }  
       visited.push(node);
       node = ShortestTrainRoute(distances, visited);
     }
   
  let shortestPath = [endNode];
  let parent = parents[endNode];
  while (parent) {
   shortestPath.push(parent);
   parent = parents[parent];
  }
  shortestPath.reverse();
   
  let results = {
   distance: distances[endNode],
   path: shortestPath,
  };
    return results;
 };

 module.exports =  findShortestRoute;