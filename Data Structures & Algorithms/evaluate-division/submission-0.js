// const PriorityQueue = require('priority-queue-js');

class Solution {
    /**
     * @param {string[][]} equations
     * @param {number[]} values
     * @param {string[][]} queries
     * @return {number[]}
     */
    calcEquation(equations, values, queries) {
        const graph = {};

        for (let i = 0; i < equations.length; i++) {
            const [from, to] = equations[i];
            const weight = values[i];

            if (from in graph) {
                graph[from].push([to, weight]);
            } else {
                graph[from] = [[to, weight]];
            }

            const reversedWeight = weight / (weight * weight);

            if (to in graph) {
                graph[to].push([from, reversedWeight]);
            } else {
                graph[to] = [[from, reversedWeight]];
            }
        }

        const n = Object.keys(graph).length

        const qLen = queries.length
        const result = Array(qLen)

        for (let i = 0; i < qLen; i++) {
            const query = queries[i]
            if (!(query[0] in graph) || !(query[1] in graph)) {
                result[i] = -1
                continue
            }
            if (query[0] === query[1]) {
                result[i] = 1
                continue
            }
            const res = this.dijkstra(n, graph, query[0], query[1])
            result[i] = res
        }
        return result
    }

    dijkstra(n, graph, src, dst) {
        const heap = new PriorityQueue((a, b) => a[1] - b[1])
        const dists = {}

        heap.enqueue([src, 1])
        dists[src] = 1

        while (!heap.isEmpty()) {
            const [node, dist] = heap.dequeue()

            if (node === dst) {
                return dist
            }

            if (dist < dists[node]) {
                continue
            }

            for (const [next, weight] of graph[node]) {
                const pathWeight = weight * dist
                if (!(next in dists) || pathWeight < dists[next] ) {
                     dists[next] = pathWeight
                     heap.enqueue([next, pathWeight])
                }
            }
        }

        return (dst in dists) ? dists[dst] : -1
    }


}
// a / b = 4
// b = a / 4
// a = 4 * b

// b / a -> a/16b -> 4/16=0.25

// a -> b -> 4

// a / b = n -> b / a = n/n^2
