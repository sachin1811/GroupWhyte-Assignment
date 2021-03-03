let TrainRouteShortest = (distances, visited) => {
    let shortest = null;
   
    for (let node in distances) {
       let currentIsShortest =
           shortest === null || distances[node] < distances[shortest];
           
        if (currentIsShortest && !visited.includes(node)) {
       shortest = node;
       }
   }
   return shortest;
};

module.exports = TrainRouteShortest;