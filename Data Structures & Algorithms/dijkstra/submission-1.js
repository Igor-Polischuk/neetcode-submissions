/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        const graph = Array.from({length: n}, () => Array())

        for (const [src, dst, weight] of edges) {
            graph[src].push([dst, weight])
        }

        const dist = Array(n).fill(-1)
        dist[src] = 0
        const heap = new PriorityQueue((a, b) => a[1] - b[1])
        heap.enqueue([src, 0])

        while (!heap.isEmpty()) {
            const item = heap.dequeue();

            if (item[1] > dist[item[0]]) {
                continue
            }

            for (const [dst, weight] of graph[item[0]]) {
                const costToReach = item[1] + weight;

                if (dist[dst] === -1 || costToReach < dist[dst]) {
                    dist[dst] = costToReach
                    heap.enqueue([dst, costToReach])
                }
            }
        }

        return dist

    }
}
