function bfs(graph, root) {
  let queue = [root];
  let dist = new Array(graph.length).fill(Infinity);
  dist[root] = 0;

  while (queue.length) {
    let u = queue.shift();

    for (let i = 0; i < graph.length; i++) {
      if (graph[u][i] && dist[i] === Infinity) {
        queue.push(i);
        dist[i] = dist[u] + 1;
      }
    }
  }

  return Object.fromEntries(dist.map((el, i) => [i, el]));
};

var exBFSGraph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]];
console.log(bfs(exBFSGraph, 1));
